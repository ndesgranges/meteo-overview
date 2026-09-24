import { HomeAssistant } from "custom-card-helpers";

// ---- Types ----

export interface ForecastPoint {
    datetime: string;
    condition?: string;
    temperature?: number;
    precipitation?: number;
    precipitation_probability?: number;
    wind_speed?: number;
    humidity?: number;
}

export interface HassLike extends HomeAssistant {
    connection: {
        subscribeMessage: <T>(
            callback: (msg: T) => void,
            subscribeMessage: { [key: string]: unknown },
        ) => Promise<() => Promise<void>>;
    };
}

// ---- Weather condition icons ----

// Maps Home Assistant weather condition states to MDI icon names.
// See https://developers.home-assistant.io/docs/core/entity/weather/#recommended-values-for-state-and-condition
const CONDITION_ICONS_DAY: Record<string, string> = {
    "clear-night": "mdi:weather-night",
    "cloudy": "mdi:weather-cloudy",
    "exceptional": "mdi:alert-circle-outline",
    "fog": "mdi:weather-fog",
    "hail": "mdi:weather-hail",
    "lightning": "mdi:weather-lightning",
    "lightning-rainy": "mdi:weather-lightning-rainy",
    "partlycloudy": "mdi:weather-partly-cloudy",
    "pouring": "mdi:weather-pouring",
    "rainy": "mdi:weather-rainy",
    "snowy": "mdi:weather-snowy",
    "snowy-rainy": "mdi:weather-snowy-rainy",
    "sunny": "mdi:weather-sunny",
    "windy": "mdi:weather-windy",
    "windy-variant": "mdi:weather-windy-variant",
};

const CONDITION_ICONS_NIGHT: Record<string, string> = {
    ...CONDITION_ICONS_DAY,
    "sunny": "mdi:weather-night",
    "partlycloudy": "mdi:weather-night-partly-cloudy",
};

export function conditionToIcon(condition: string | undefined, isNight: boolean): string {
    if (!condition) return "mdi:weather-cloudy";
    const map = isNight ? CONDITION_ICONS_NIGHT : CONDITION_ICONS_DAY;
    return map[condition] || "mdi:weather-cloudy";
}

export function isNightHour(date: Date, sunrise?: Date, sunset?: Date): boolean {
    if (sunrise && sunset) {
        // Compare only time of day, wrapping across midnight
        const t = date.getHours() * 60 + date.getMinutes();
        const sr = sunrise.getHours() * 60 + sunrise.getMinutes();
        const ss = sunset.getHours() * 60 + sunset.getMinutes();
        return t < sr || t >= ss;
    }
    const h = date.getHours();
    return h < 7 || h >= 20;
}

const WET_CONDITIONS = new Set([
    "rainy",
    "pouring",
    "lightning-rainy",
    "snowy-rainy",
    "hail",
]);

// True when this forecast slot has actual precipitation (not just a probability).
export function isRainy(p: ForecastPoint): boolean {
    if ((p.precipitation ?? 0) > 0) return true;
    if (p.condition && WET_CONDITIONS.has(p.condition)) return true;
    return false;
}

// Group consecutive rainy forecast points into inclusive [start, end] ranges.
export function rainyRanges(forecast: ForecastPoint[]): Array<[number, number]> {
    const ranges: Array<[number, number]> = [];
    let start = -1;
    for (let i = 0; i < forecast.length; i++) {
        if (isRainy(forecast[i])) {
            if (start === -1) start = i;
        } else if (start !== -1) {
            ranges.push([start, i - 1]);
            start = -1;
        }
    }
    if (start !== -1) ranges.push([start, forecast.length - 1]);
    return ranges;
}

// ---- Smooth path ----

// Build a smooth SVG path through the given points using a Catmull-Rom to
// cubic Bezier conversion. Tension of 1/6 gives a natural, non-overshooting curve.
export function smoothPath(points: Array<[number, number]>): string {
    if (points.length === 0) return "";
    if (points.length === 1) return `M ${points[0][0]},${points[0][1]}`;
    let d = `M ${points[0][0]},${points[0][1]}`;
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i - 1] || points[i];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[i + 2] || p2;
        const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
    }
    return d;
}

// ---- Y axis ----

// Pick a rounded temperature range. Chooses the largest step from a candidate
// list that keeps the top/bottom padding within `maxPadding` degrees, so we
// don't waste vertical space above the highest / below the lowest data point.
export function niceRange(
    min: number,
    max: number,
    maxPadding = 4,
): { min: number; max: number; ticks: number[] } {
    const candidates = [10, 5, 2, 1];
    const step =
        candidates.find(
            (s) =>
                Math.ceil(max / s) * s - max <= maxPadding &&
                min - Math.floor(min / s) * s <= maxPadding,
        ) ?? candidates[candidates.length - 1];
    const roundedMin = Math.floor(min / step) * step;
    const roundedMax = Math.ceil(max / step) * step;
    // Ensure at least two ticks even if min ≈ max
    const finalMax = roundedMax === roundedMin ? roundedMin + step : roundedMax;
    const ticks: number[] = [];
    for (let t = roundedMin; t <= finalMax; t += step) ticks.push(t);
    return { min: roundedMin, max: finalMax, ticks };
}

// ---- Time parsing ----

export function parseDate(value: string | Date | undefined): Date | undefined {
    if (!value) return undefined;
    if (value instanceof Date) return value;
    const d = new Date(value);
    return isNaN(d.getTime()) ? undefined : d;
}

export function formatHour(date: Date, locale?: string): string {
    return new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }).format(date);
}

