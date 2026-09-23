import { MeteoOverview } from "./card";
import { MeteoOverviewEditor } from "./editor";
import {
    CARD_TYPE,
    CARD_NAME,
    CARD_DESCRIPTION,
    CARD_VERSION,
    CARD_AUTHOR,
} from "./consts";

console.info(
    `%c 🌤 ${CARD_NAME} 🌤 %c ${CARD_VERSION} \n%c  By @${CARD_AUTHOR}`,
    "color: white; background: #03a9f4; font-weight: bold; border: solid 1px #03a9f4; border-radius: 4px 0 0 4px",
    "color: #03a9f4; background: white; font-weight: bold; border: solid 1px #03a9f4; border-radius:  0 4px 4px 0",
    "color: #03a9f4;",
);

customElements.define(`${CARD_TYPE}-editor`, MeteoOverviewEditor);
customElements.define(CARD_TYPE, MeteoOverview);

declare global {
    interface Window {
        customCards: Array<Object>;
    }
}

window.customCards = window.customCards || [];
window.customCards.push({
    type: CARD_TYPE,
    name: CARD_NAME,
    description: CARD_DESCRIPTION,
    preview: true,
    documentationURL: "https://github.com/ndesgranges/meteo-overview",
});
