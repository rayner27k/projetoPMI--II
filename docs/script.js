const submitButton = document.querySelector('#submit-btn');
const clearButton = document.querySelector('#clear-btn');
const allInputs = document.querySelectorAll('input');
const agreementCheckbox = document.querySelector('#agreement');

submitButton.disabled = true;

agreementCheckbox.addEventListener('change', () => {
  submitButton.disabled = !agreementCheckbox.checked;
});

clearButton.addEventListener('click', () => {
  for (let index = 0; index < allInputs.length; index += 1) {
    const inputElement = allInputs[index];
    inputElement.value = '';
  }
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});
