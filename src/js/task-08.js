// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что 
// все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в
//  обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
//   Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    const dataForm = {
        email: email.value,
        password: password.value,
    };
    if (dataForm.email === '' || dataForm.password === '') {
    alert('Усі поля повинні бути заполнені!');
  } else { const dataForm = { email: email.value, password: password.value };
  console.log(dataForm);
  event.currentTarget.reset();
}
}
