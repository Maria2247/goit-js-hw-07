const form = document.querySelector('.login-form');

const sendForm = event => {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const passValue = event.currentTarget.elements.password.value;

  if (emailValue === '' || passValue === '') {
    alert('All form fields must be filled in');
  }

  const formInfo = {
    email: emailValue.trim(),
    password: passValue.trim(),
  };
  console.log(formInfo);

  event.currentTarget.reset();
};

form.addEventListener('submit', sendForm);

const btnStyles = document.querySelector('button');
btnStyles.style.fontFamily = '"Montserrat", sans-serif';
btnStyles.style.fontSize = '16px';
btnStyles.style.color = '#fff';
btnStyles.style.backgroundColor = '#4E75FF';
btnStyles.style.borderRadius = '8px';
btnStyles.style.width = '86px';
btnStyles.style.height = '40px';
btnStyles.style.border = 'none';
btnStyles.style.cursor = 'pointer';
btnStyles.style.marginTop = '16px';

const labelStyle = document.querySelectorAll('label');
labelStyle.forEach(label => {
  label.style.display = 'block';
  label.style.marginTop = '8px';
});

const inputStyle = document.querySelectorAll('input');
inputStyle.forEach(input => {
  input.style.display = 'flex';
  input.style.height = '40px';
  input.style.width = '360px';
  input.style.border = '1px solid #808080';
  input.style.borderRadius = '4px';
  input.style.marginTop = '8px';
});
