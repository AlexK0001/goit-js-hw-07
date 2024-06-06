function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const  colorNext = document.querySelector(".color");

const handleClick = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorNext.textContent = newColor;
}

changeColor.addEventListener("click", handleClick);