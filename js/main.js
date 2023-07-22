const request_url = "https://api.adviceslip.com/advice";

window.onload = sendRequest(request_url)

const advice_section__dice_btn = document.getElementById("advice_section__dice_btn");
const qoute_text_id_area = document.getElementById("advice_section__advice_id");
const qoute_text_area = document.getElementById("advice_section__advice_text");

advice_section__dice_btn.addEventListener("click", function() {
    sendRequest();
});

function sendRequest() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
        qoute_text_id_area.textContent = data.id;
        qoute_text_area.textContent = `"${data.advice}"`;
    })
}