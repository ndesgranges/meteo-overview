import { LovelaceCardConfig } from "custom-card-helpers";
import { html, svg, LitElement, nothing } from "lit";

import { CARD_TYPE, CHART_POINTS, CHART_HOUR_LABELS } from "./consts";
import { styles } from "./styles";
import {
    ForecastPoint,
    HassLike,
    conditionToIcon,
    formatHour,
    isNightHour,
    isRainy,
    niceRange,
    parseDate,
    rainyRanges,
    smoothPath,
} from "./helpers";
import { HA_COLORED_CONDITIONS, renderWeatherSVG } from "./weather-svg";

export interface MeteoOverviewCardConfig extends LovelaceCardConfig {
    entity: string;
    sun_entity?: string;
    chart_height?: number;
}

interface ForecastEvent {
    type: string;
    forecast: ForecastPoint[];
}

export class MeteoOverview extends LitElement {

    private _hass: HassLike;
    private _config: MeteoOverviewCardConfig;

    private _forecast: ForecastPoint[] = [];
    private _subscribedEntity?: string;
    private _unsub?: Promise<() => Promise<void>>;

    static properties = {
        _forecast: { state: true },
        _hass: { state: true },
    };

    static styles = styles;

    set hass(hass: HassLike) {
        this._hass = hass;
        this._ensureSubscribed();
        this.requestUpdate();
    }

    setConfig(config: MeteoOverviewCardConfig) {
        if (!config.entity) {
            throw new Error("You need to define a weather entity");
        }
        this._config = config;
        this._ensureSubscribed();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._unsubscribe();
    }

    connectedCallback() {
        super.connectedCallback();
        this._ensureSubscribed();
    }

    private async _ensureSubscribed() {
        if (!this._hass?.connection || !this._config?.entity) return;
        if (this._subscribedEntity === this._config.entity && this._unsub) return;
        await this._unsubscribe();
        this._subscribedEntity = this._config.entity;
        const entityId = this._config.entity;
        this._unsub = this._hass.connection.subscribeMessage<ForecastEvent>(
            (msg) => {
                this._forecast = msg.forecast || [];
                this.requestUpdate();
            },
            {
                type: "weather/subscribe_forecast",
                forecast_type: "hourly",
                entity_id: entityId,
            },
        );
    }

    private async _unsubscribe() {
        if (!this._unsub) return;
        try {
            const unsub = await this._unsub;
            await unsub();
        } catch {
            // subscription may have failed; nothing to clean up
        }
        this._unsub = undefined;
        this._subscribedEntity = undefined;
    }

    private _localizeCondition(condition: string | undefined): string {
        if (!condition) return "";
        return (
            this._hass?.localize(`component.weather.entity_component._.state.${condition}`) ||
            condition
        );
    }

    private _moreInfo() {
        this.dispatchEvent(
            new CustomEvent("hass-more-info", {
                bubbles: true,
                composed: true,
                detail: { entityId: this._config.entity },
            }),
        );
    }

    private _renderPlaceholder(text: string) {
        return html`
        <ha-card>
            <div class="card-content">
                <div class="placeholder">${text}</div>
            </div>
        </ha-card>
        `;
    }

    render() {
        if (!this._hass || !this._config) return html``;
        const stateObj = this._hass.states[this._config.entity];
        if (!stateObj) return this._renderPlaceholder(`Entity ${this._config.entity} not found`);

        const forecast = (this._forecast || []).slice(0, CHART_POINTS);
        if (forecast.length < 2) {
            return this._renderPlaceholder("Loading hourly forecast…");
        }

        // --- Y axis (temperature range) ---
        const temps = forecast
            .map((p) => p.temperature)
            .filter((t): t is number => typeof t === "number");
        if (temps.length < 2) {
            return this._renderPlaceholder("No temperature data in forecast");
        }
        const { min: yMin, max: yMax, ticks: yTicks } = niceRange(
            Math.min(...temps),
            Math.max(...temps),
        );

        // --- Chart geometry ---
        const W = 600;
        const H = this._config.chart_height ?? 140;
        const yPad = 12;
        const yScale = (t: number) =>
            yPad + ((yMax - t) / (yMax - yMin)) * (H - yPad);
        const xForIndex = (i: number) => (i + 0.5) * (W / forecast.length);

        const midTemp = (yMin + yMax) / 2;
        const points: Array<[number, number]> = forecast.map((p, i) => [
            xForIndex(i),
            yScale(typeof p.temperature === "number" ? p.temperature : midTemp),
        ]);
        const linePath = smoothPath(points);
        const lastX = points[points.length - 1][0];
        const firstX = points[0][0];
        const areaPath = `${linePath} L ${lastX},${H} L ${firstX},${H} Z`;

        // --- Temperature extrema (for peak / trough labels) ---
        let peakIdx = -1;
        let troughIdx = -1;
        let peakT = -Infinity;
        let troughT = Infinity;
        forecast.forEach((p, i) => {
            if (typeof p.temperature !== "number") return;
            if (p.temperature > peakT) { peakT = p.temperature; peakIdx = i; }
            if (p.temperature < troughT) { troughT = p.temperature; troughIdx = i; }
        });
        const showExtrema = peakIdx !== -1 && troughIdx !== -1 && peakIdx !== troughIdx;

        // --- Sun times ---
        const sunEntity = this._config.sun_entity
            ? this._hass.states[this._config.sun_entity]
            : undefined;
        const sunrise = parseDate(sunEntity?.attributes.next_rising as string | undefined);
        const sunset = parseDate(sunEntity?.attributes.next_setting as string | undefined);
        const t0 = parseDate(forecast[0].datetime);
        const tN = parseDate(forecast[forecast.length - 1].datetime);
        const timeToX = (d: Date): number | undefined => {
            if (!t0 || !tN || d < t0 || d > tN) return undefined;
            const frac = (d.getTime() - t0.getTime()) / (tN.getTime() - t0.getTime());
            return firstX + frac * (lastX - firstX);
        };
        const sunriseX = sunrise ? timeToX(sunrise) : undefined;
        const sunsetX = sunset ? timeToX(sunset) : undefined;

        // Flip the trough marker above the curve when it would sit right on top
        // of a sun marker (which is anchored at the bottom of the chart)
        const NEAR_SUN_PX = 40;
        const collidesWithSun = (x: number) =>
            (sunriseX !== undefined && Math.abs(x - sunriseX) < NEAR_SUN_PX) ||
            (sunsetX !== undefined && Math.abs(x - sunsetX) < NEAR_SUN_PX);
        const troughFlipped = showExtrema && collidesWithSun(points[troughIdx][0]);

        // --- Hour labels (start of each group, so the first one is the closest to now) ---
        const groupSize = Math.max(1, Math.floor(forecast.length / CHART_HOUR_LABELS));
        const labelIndices: number[] = [];
        for (let g = 0; g < CHART_HOUR_LABELS; g++) {
            labelIndices.push(Math.min(forecast.length - 1, g * groupSize));
        }

        // --- Precipitation ---
        const precipProbs = forecast.map((p) => p.precipitation_probability ?? 0);
        const precipMax = Math.max(...precipProbs);
        const rainRanges = rainyRanges(forecast);

        // --- Current conditions ---
        const now = new Date();
        const isNightNow = isNightHour(now, sunrise, sunset);
        const currentIcon = conditionToIcon(stateObj.state, isNightNow);
        const currentTemp = stateObj.attributes.temperature;
        const tempUnit = stateObj.attributes.temperature_unit || "°";

        return html`
        <ha-card>
            <div class="card-content">
                <div class="chart-wrapper">
                    <div class="y-axis">
                        ${yTicks.map(
            (t) => html`
                                <div
                                    class="y-label"
                                    style="top: ${(yScale(t) / H) * 100}%"
                                >
                                    ${t}°
                                </div>
                            `,
        )}
                    </div>
                    <div class="hours-row">
                    ${labelIndices.map((i) => {
            const p = forecast[i];
            const d = parseDate(p.datetime);
            const night = d ? isNightHour(d, sunrise, sunset) : false;
            const cond = p.condition;
            const useSvg = cond && HA_COLORED_CONDITIONS.has(cond);
            return html`
                            <div class="hour-item">
                                <div class="hour">${d ? formatHour(d) : ""}</div>
                                ${useSvg
                    ? html`<span class="weather-svg">${renderWeatherSVG(cond!, night)}</span>`
                    : html`<ha-icon .icon=${conditionToIcon(cond, night)}></ha-icon>`}
                                <div class="hour-temp">
                                    ${p.temperature != null
                    ? `${Math.round(p.temperature)}°`
                    : ""
                }
                                </div>
                            </div>
                        `;
        })}
                    </div>
                    <div class="chart-canvas" style="--chart-height: ${H}px">
                        <svg
                            viewBox="0 0 ${W} ${H}"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <defs>
                            <linearGradient id="tempFill-${this._config.entity}" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" class="fill-stop-top"></stop>
                            <stop offset="100%" class="fill-stop-bottom"></stop>
                            </linearGradient>
                            </defs>
                            <g class="grid">
                            ${yTicks.map(
            (t) => svg`
                                <line
                                class="grid-h"
                                x1="0"
                                y1="${yScale(t)}"
                                x2="${W}"
                                y2="${yScale(t)}"
                                />
                                `,
        )}
                            ${labelIndices.map((_i, g) => {
            // Vertical gridlines sit under each hour column center, not on the data point
            const x = ((g + 0.5) * W) / CHART_HOUR_LABELS;
            return svg`
                                <line
                                class="grid-v"
                                x1="${x}"
                                y1="0"
                                x2="${x}"
                                y2="${H}"
                                />
                                `;
        })}
                            </g>
                            <path
                            class="area"
                            d="${areaPath}"
                            fill="url(#tempFill-${this._config.entity})"
                            />
                            <path class="curve" d="${linePath}" fill="none" />
                        </svg>
                        ${rainRanges.map(([s, e]) => {
            const leftPct = (s / forecast.length) * 100;
            const widthPct = ((e - s + 1) / forecast.length) * 100;
            return html`
                                <div
                                    class="rain-overlay"
                                    style="left: ${leftPct}%; width: ${widthPct}%"
                                ></div>
                            `;
        })}
                        ${showExtrema
                ? html`
                                <div
                                    class="temp-marker peak"
                                    style="left: ${(points[peakIdx][0] / W) * 100}%; top: ${(points[peakIdx][1] / H) * 100}%"
                                >
                                    ${Math.round(peakT)}°
                                </div>
                                <div
                                    class="temp-marker ${troughFlipped ? "peak" : "trough"}"
                                    style="left: ${(points[troughIdx][0] / W) * 100}%; top: ${(points[troughIdx][1] / H) * 100}%"
                                >
                                    ${Math.round(troughT)}°
                                </div>
                            `
                : nothing
            }
                        ${sunriseX !== undefined && sunrise
                ? html`
                                <div
                                    class="sun-marker"
                                    style="left: ${(sunriseX / W) * 100}%; transform: translateX(${-(sunriseX / W) * 100}%)"
                                >
                                    <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                                    <span>${formatHour(sunrise)}</span>
                                </div>
                            `
                : nothing
            }
                        ${sunsetX !== undefined && sunset
                ? html`
                                <div
                                    class="sun-marker"
                                    style="left: ${(sunsetX / W) * 100}%; transform: translateX(${-(sunsetX / W) * 100}%)"
                                >
                                    <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
                                    <span>${formatHour(sunset)}</span>
                                </div>
                            `
                : nothing
            }
                    </div>
                </div>
            </div>
        </ha-card>
    `;
    }

    static getConfigElement() {
        return document.createElement(`${CARD_TYPE}-editor`);
    }

    static getStubConfig(hass: HassLike) {
        // Pick the first available weather entity for the initial preview
        const weatherEntity = Object.keys(hass.states || {}).find((id) =>
            id.startsWith("weather."),
        );
        const sunEntity = hass.states?.["sun.sun"] ? "sun.sun" : undefined;
        return {
            entity: weatherEntity || "",
            ...(sunEntity ? { sun_entity: sunEntity } : {}),
        };
    }

    getCardSize() {
        return 6;
    }

    getGridOptions() {
        return {
            columns: 12,
            min_columns: 6,
            max_columns: 12,
            min_rows: 4,
            max_rows: 8,
        };
    }
}

