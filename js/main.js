import AdviceClient from "./AdviceClient.js";

const adviceClient = new AdviceClient("https://api.adviceslip.com/advice");
window.onload = adviceClient.sendRequest();

const qouteId = document.getElementById("advice_sectionadvice_id");
qouteId.textContent = adviceClient.getQouteId();

const qoute = document.getElementById("advice_sectionadvice_text");
qoute.textContent = adviceClient.getQoute();