function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const numberInput = document.querySelector('#controls input[type="number"]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = Number(numberInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    numberInput.value = ''; 
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = '';
  
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
    size += 10;
  }

  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
