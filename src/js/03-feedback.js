import { throttle } from 'lodash';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    let storage = {
      email: input.value,
      message: textarea.value,
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(storage));
  }, 500)
);

let parsed = JSON.parse(localStorage.getItem(LOCAL_KEY));

if (localStorage.getItem(LOCAL_KEY) === null) {
  input.value = '';
  textarea.value = '';
} else {
  input.value = parsed.email;
  textarea.value = parsed.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(LOCAL_KEY);
  input.value = '';
  textarea.value = '';
  console;
});
