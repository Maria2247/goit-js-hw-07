const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const getUserInput = event => {
  const inputValue = event.currentTarget.value;
  const inputValueTrimmed = inputValue.trim();
  if (inputValueTrimmed == '' || inputValueTrimmed === ' ') {
    return (outputEl.textContent = 'Anonymous');
  }
  return (outputEl.textContent = inputValueTrimmed);
};

inputEl.addEventListener('input', getUserInput);

// STYLES

inputEl.style.height = '40px';
inputEl.style.width = '360px';
inputEl.style.border = '1px solid #808080';
inputEl.style.borderRadius = '4px';
inputEl.style.fontSize = '16px';
inputEl.style.color = '#2e2f42';
inputEl.style.padding = '24px';

const outputText = document.querySelector('h1');
outputText.style.fontSize = '24px';
