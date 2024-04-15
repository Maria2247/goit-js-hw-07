function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');

const setNewColor = () => {
  const bodyColor = document.querySelector('body');
  const colorName = document.querySelector('.color');
  const newColor = getRandomHexColor();

  bodyColor.style.backgroundColor = newColor;
  colorName.textContent = newColor;
  console.log(colorName.textContent, newColor);
};

colorBtn.addEventListener('click', setNewColor);

colorBtn.style.fontSize = '16px';
colorBtn.style.color = '#fff';
colorBtn.style.backgroundColor = '#4E75FF';
colorBtn.style.borderRadius = '8px';
colorBtn.style.width = '148px';
colorBtn.style.height = '40px';
colorBtn.style.border = 'none';
colorBtn.style.cursor = 'pointer';
colorBtn.style.padding = '8px 16px';

const textStyle = document.querySelector('.widget p');
textStyle.style.color = '#2e2f42';
textStyle.style.fontSize = '16px';
