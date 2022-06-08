import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const formKey = 'feedback-form-state';

let formData = rebootForm() ?? {};
rebootForm();
form.addEventListener('submit', cleanForm);
form.addEventListener('input', throttle(saveValue, 500));

function saveValue(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
}

function rebootForm() {
  const formTextContent = localStorage.getItem(formKey) || '';
  if (formTextContent) {
    const parsedTextContent = JSON.parse(formTextContent);
    email.value = parsedTextContent.email ? parsedTextContent.email : '';
    message.value = parsedTextContent.message ? parsedTextContent.message : '';
    //   email.value = parsedTextContent.email;
    //   message.value = parsedTextContent.message;
  }
  return {
    email: email.value,
    message: message.value,
  };
}

function cleanForm(e) {
  e.preventDefault();
  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    return alert('Please fill out the form!');
  }
  console.log(formData);
  localStorage.removeItem(formKey);
  formData = {};
  form.reset();
}
