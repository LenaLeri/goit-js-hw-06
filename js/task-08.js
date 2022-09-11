const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { password, email },
  } = event.currentTarget;
  if (password.value === '' || email.value === '') {
    alert('Всі поля повинні бути заповнені!');
    return;
  }
  const userData = {
    name: email.value,
    password: password.value,
  };
  console.log(userData);
  form.reset();
}

form.addEventListener('submit', handleSubmit);
