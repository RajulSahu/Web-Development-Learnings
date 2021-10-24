const btn = document.querySelector("#v3");

function createAlert() {
  alert("YOU CLICKED THE BUTTON!");
}

btn.addEventListener("click", createAlert);

function twist() {
  console.log("TWIST");
}
function shout() {
  console.log("SHOUT");
}

const btn_2 = document.querySelector("#tas");

btn_2.addEventListener("click", twist);
btn_2.addEventListener("click", shout);
