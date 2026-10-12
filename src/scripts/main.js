'use strict';

const fields = [
  {
    id: 'sign-up-name',
    label: 'First name',
    placeholder: 'Enter your first name',
  },
  {
    id: 'sign-up-last-name',
    label: 'Last name',
    placeholder: 'Enter your last name',
  },
  { id: 'sign-up-email', label: 'Email', placeholder: 'Enter your email' },
  {
    id: 'sign-up-password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  { id: 'sign-in-email', label: 'Email', placeholder: 'Enter your email' },
  {
    id: 'sign-in-password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
];

fields.forEach(({ id, label, placeholder }) => {
  const input = document.getElementById(id);

  const inputLabel = document.createElement('label');

  inputLabel.textContent = label;
  inputLabel.htmlFor = id;

  input.placeholder = placeholder;

  input.before(inputLabel);
});
