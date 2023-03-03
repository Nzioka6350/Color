const canvas = document.getElementById("canvas");
const button = document.getElementById("button");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 255);
};

button.addEventListener("click", () => {
  canvas.style.backgroundColor = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
});
