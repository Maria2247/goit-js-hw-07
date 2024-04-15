function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const maxNum = inputEl.getAttribute('max');
const minNum = inputEl.getAttribute('min');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const createBoxes = event => {
  let userInput = Number(inputEl.value);
  if (userInput >= minNum && userInput <= maxNum) {
    boxesEl.innerHTML = ' ';
    let size = 30;
    for (let i = minNum; i <= userInput; i++) {
      const addedBox = document.createElement('div');
      addedBox.style.width = `${size}px`;
      addedBox.style.height = `${size}px`;
      addedBox.style.backgroundColor = getRandomHexColor();
      boxesEl.appendChild(addedBox);
      size += 10;
    }
  }
  inputEl.value = '';
};

createBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}
destroyBtn.addEventListener('click', destroyBoxes);

// const amount = () => {
//   let userInput = Number(inputEl.value);
//   if (userInput >= minNum && userInput <= maxNum) {
//     createBoxes(userInput);
//   }
//   inputEl.value = '';
// };
// function createBoxes(amount) {
//   boxesEl.innerHTML = ' ';
//   let size = 30;
//   for (let i = minNum; i <= amount; i++) {
//     const addedBox = document.createElement('div');
//     addedBox.style.width = `${size}px`;
//     addedBox.style.height = `${size}px`;
//     addedBox.style.backgroundColor = getRandomHexColor();
//     boxesEl.appendChild(addedBox);
//     size += 10;
//   }
// }

// createBtn.addEventListener('click', amount)
