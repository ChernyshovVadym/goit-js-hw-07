function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector('#controls');
const dataCreate = controls.querySelector('[data-create]');
const dataDestroy = controls.querySelector('[data-destroy]');

const createBoxes = (amount) => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
};

const destroyBoxes = () => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
};
dataCreate.addEventListener('click', () => {
  const input = controls.querySelector('input');
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
  input.value = '';
});
dataDestroy.addEventListener('click', destroyBoxes);