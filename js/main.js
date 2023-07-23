const request_url = "https://api.adviceslip.com/advice";
window.onload = getAdvice(request_url);

const qouteId = document.getElementById("advice_section__advice_id");
const qoute = document.getElementById("advice_section__advice_text");

const advice_section__dice_btn = document.getElementById("advice_section__dice_btn");
advice_section__dice_btn.addEventListener("click", async function() {
    qoute.textContent = "Loading...";
    const advice = await getAdvice(request_url);
    qoute.textContent = advice;
});

function getAdvice(request_url) {
    fetch(request_url)
      .then((response) => response.json())
      .then((data) => data.slip)
      .then((data) => {
        qouteId.textContent = data.id;
        qoute.textContent = data.advice;
      });
}