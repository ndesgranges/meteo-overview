import { css } from "lit";

import { weatherSVGStyles } from "./weather-svg";

export const styles = [
    weatherSVGStyles,
    css`
    :host {
        /* Themeable colors - themes can override these for custom look */
        --meteo-overview-curve-color: var(--primary-color);
        --meteo-overview-precip-color: var(--info-color, var(--primary-color));
        --meteo-overview-grid-color: var(--divider-color);
    }

    ha-card {
        overflow: hidden;
    }

    .card-content {
        padding: 8px 12px 12px 12px;
    }

    .placeholder {
        padding: 32px 8px;
        text-align: center;
        color: var(--secondary-text-color);
    }

    /* --- Header --- */
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 4px 8px 12px 8px;
        cursor: pointer;
    }
    .header .location {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .header .name {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header .condition {
        font-size: 13px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header .current {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
    }
    .header .current ha-icon {
        --mdc-icon-size: 32px;
        color: var(--state-icon-color, var(--primary-text-color));
    }
    .header .current .temp {
        font-size: 24px;
        font-weight: 400;
    }

    /* --- Chart layout --- */
    .chart-wrapper {
        display: grid;
        grid-template-columns: 36px 1fr;
        grid-template-areas:
            ".      hours"
            "yaxis  chart"
            ".      precip";
        column-gap: 4px;
        row-gap: 4px;
    }

    .y-axis {
        grid-area: yaxis;
        position: relative;
        color: var(--secondary-text-color);
        font-size: 11px;
    }
    .y-label {
        position: absolute;
        right: 4px;
        transform: translateY(-50%);
        white-space: nowrap;
    }

    /* --- Hours row --- */
    .hours-row {
        grid-area: hours;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    .hour-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        font-size: 12px;
        color: var(--primary-text-color);
    }
    .hour-item .hour {
        color: var(--secondary-text-color);
    }
    .hour-item ha-icon {
        --mdc-icon-size: 20px;
        color: var(--state-icon-color, var(--primary-text-color));
    }
    .hour-item .weather-svg {
        display: inline-flex;
        line-height: 0;
    }
    .hour-item .weather-svg svg {
        width: 22px;
        height: 22px;
    }
    .hour-item .hour-temp {
        font-weight: 500;
    }

    /* --- Chart canvas --- */
    .chart-canvas {
        grid-area: chart;
        position: relative;
        width: 100%;
        height: var(--chart-height, 200px);
    }
    .chart-canvas svg {
        display: block;
        width: 100%;
        height: 100%;
    }

    .grid-h,
    .grid-v {
        stroke: var(--meteo-overview-grid-color);
        stroke-width: 1;
        stroke-dasharray: 3 3;
        vector-effect: non-scaling-stroke;
        opacity: 0.6;
    }

    .curve {
        stroke: var(--meteo-overview-curve-color);
        stroke-width: 2;
        vector-effect: non-scaling-stroke;
        opacity: 0.9;
    }

    .fill-stop-top {
        stop-color: var(--meteo-overview-curve-color);
        stop-opacity: 0.45;
    }
    .fill-stop-bottom {
        stop-color: var(--meteo-overview-curve-color);
        stop-opacity: 0;
    }

    /* --- Sun markers --- */
    .sun-marker {
        position: absolute;
        bottom: -16px;
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: var(--secondary-text-color);
        pointer-events: none;
        white-space: nowrap;
        /* translateX is set inline so the label stays inside the chart bounds */
    }
    .sun-marker ha-icon {
        --mdc-icon-size: 14px;
        color: var(--warning-color, var(--primary-text-color));
    }

    /* --- Peak / trough temperature markers --- */
    .temp-marker {
        position: absolute;
        font-size: 11px;
        font-weight: 500;
        color: var(--primary-text-color);
        white-space: nowrap;
        pointer-events: none;
    }
    .temp-marker.peak {
        transform: translate(-50%, calc(-100% - 4px));
    }
    .temp-marker.trough {
        transform: translate(-50%, 4px);
    }

    /* --- Rain overlay (animated vertical drops over rainy hours) --- */
    .rain-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        pointer-events: none;
        overflow: hidden;
        background: linear-gradient(
            180deg,
            rgba(0, 161, 255, 0.14),
            rgba(0, 161, 255, 0.02)
        );
    }
    .rain-overlay::before,
    .rain-overlay::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -24px;
        bottom: -24px;
        will-change: transform;
    }
    /* Front layer: denser, brighter, faster drops */
    .rain-overlay::before {
        background-image: radial-gradient(
            ellipse 0.8px 3px at 50% 50%,
            rgba(0, 161, 255, 0.9) 40%,
            transparent 70%
        );
        background-size: 8px 16px;
        animation: meteo-rain-fall-a 0.5s linear infinite;
    }
    /* Back layer: sparser, dimmer, slower drops (parallax) */
    .rain-overlay::after {
        background-image: radial-gradient(
            ellipse 0.8px 3px at 50% 50%,
            rgba(0, 161, 255, 0.55) 40%,
            transparent 70%
        );
        background-size: 14px 22px;
        background-position: 5px 0;
        animation: meteo-rain-fall-b 0.85s linear infinite;
    }
    @keyframes meteo-rain-fall-a {
        from { transform: translateY(-16px); }
        to   { transform: translateY(0); }
    }
    @keyframes meteo-rain-fall-b {
        from { transform: translateY(-22px); }
        to   { transform: translateY(0); }
    }
    @media (prefers-reduced-motion: reduce) {
        .rain-overlay::before,
        .rain-overlay::after { animation: none; }
    }
`,
];
