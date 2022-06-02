import throttle from 'lodash.throttle';

const form = document.querySelector("form")
const email = document.querySelector("input")
const message = document.querySelector("textarea")
form.addEventListener("input", throttle(saveValue, 500))
form.addEventListener("submit", cleanForm)

function saveValue() {
    const value = {
        email: email.value,
        message: message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(value));
};


function cleanForm(e) {
    e.preventDefault();
    console.log(localStorage.getItem("feedback-form-state"));
    localStorage.removeItem("feedback-form-state");
    form.reset();
};

function rebootForm() {
    const formContent = JSON.parse(localStorage.getItem("feedback-form-state")) || "";
    console.log(formContent.email);
    console.log(email.value);
    email.value = formContent.email;
    message.textContent = formContent.message;
};