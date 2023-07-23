import AdviceClient from "./AdviceClient.js";

const adviceClient = new AdviceClient("https://api.adviceslip.com/advice");
window.onload = adviceClient.sendRequest();

const qouteId = document.getElementById("advice_sectionadvice_id");
qouteId.textContent = adviceClient.getQouteId(); 

const qoute = document.getElementById("advice_sectionadvice_text");
qoute.textContent = adviceClient.getQoute();

const advice_section__dice_btn = document.getElementById("advice_section__dice_btn");
advice_section__dice_btn.addEventListener("click", function() {
    setTimeout(() => {
        qouteId.textContent = "Loading";
        qoute.textContent = "Loading...";
    }, 250);
    adviceClient.sendRequest();
});