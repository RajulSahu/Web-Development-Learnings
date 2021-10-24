const btn2 = document.querySelector("#btn2");
const container = document.querySelector("#container");

btn2.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandomColor();
  e.stopPropagation(); // To stop Event Bubbling.
});

container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
