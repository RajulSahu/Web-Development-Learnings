const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("CONGRATS ITS WORKING!");
};

function scream() {
  console.log("AAAAAAAAAHHHHHHH!");
  console.log("DON'T TOUCH ME!");
}

btn.onmouseenter = scream;
