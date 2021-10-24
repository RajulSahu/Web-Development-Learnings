const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("change", function (e) {
  console.log("CHANGE EVENT!");
});

input.addEventListener("input", function (e) {
  if (input.value == "") {
    h1.innerText = "Type Your Name Below:";
  } else {
    h1.innerText = `Welcome, ${input.value}`;
  }
});
