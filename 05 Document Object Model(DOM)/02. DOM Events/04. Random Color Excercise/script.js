const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector("h1").innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
