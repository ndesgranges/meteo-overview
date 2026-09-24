import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";
import { html, LitElement } from "lit";

export interface MeteoOverviewCardConfig extends LovelaceCardConfig {
    entity: string;
    sun_entity?: string;
    chart_height?: number;
}

export class MeteoOverviewEditor extends LitElement {

    private _hass: HomeAssistant;
    private _config: MeteoOverviewCardConfig;

    static schema = [
        {
            name: "entity",
            required: true,
            selector: { entity: { domain: "weather" } },
        },
        {
            name: "sun_entity",
            selector: { entity: { domain: "sun" } },
        },
        {
            name: "chart_height",
            selector: {
                number: {
                    min: 80,
                    max: 400,
                    step: 10,
                    mode: "slider",
                    unit_of_measurement: "px",
                },
            },
        },
    ];

    static properties = {
        _config: { state: true },
    };

    set hass(hass: HomeAssistant) {
        this._hass = hass;
    }

    setConfig(config: MeteoOverviewCardConfig) {
        this._config = config;
    }

    private _computeLabel = (schema: { name: string }) => {
        if (schema.name === "entity") {
            return this._hass?.localize("ui.panel.lovelace.editor.card.generic.entity") || "Weather entity";
        }
        if (schema.name === "sun_entity") {
            return "Sun entity (optional, for sunrise/sunset)";
        }
        if (schema.name === "chart_height") {
            return "Chart height";
        }
        return schema.name;
    };

    private _valueChanged(ev: CustomEvent) {
        if (!this._config || !this._hass) return;
        const newConfig = Object.assign({}, this._config, ev.detail.value);
        this._config = newConfig;
        const event = new CustomEvent("config-changed", {
            detail: { config: newConfig },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }

    render() {
        if (!this._hass || !this._config) {
            return html`<div>Invalid</div>`;
        }
        return html`
            <ha-form
                .hass=${this._hass}
                .data=${this._config}
                .schema=${MeteoOverviewEditor.schema}
                .computeLabel=${this._computeLabel}
                @value-changed=${this._valueChanged}
            ></ha-form>
        `;
    }
}

