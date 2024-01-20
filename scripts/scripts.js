window.onload = function () {


  // 2. В поле "Full Name" запретите вводить цифры.

  const fullName = document.getElementById('full_name-input');
  fullName.onkeydown = (e) => {
    let letters = parseInt(e.key);
    if (!isNaN(letters)) {
      return false;
    }
  };

  // 3. В поле "Your username" запретите вводить точки и запятые.
  const userName = document.getElementById('user_name-input');
  userName.onkeydown = (e) => {
    let symbol = e.key;
    if (symbol === '.' || symbol === ',') {
      return false
    }
  };

  // 4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.

  const checkBox = document.getElementById('custom-checkbox');
  checkBox.addEventListener('click', (event) => {
    if (checkBox.checked) {
      console.log('Согласен');
    } else {
      console.log('Не согласен');
    }
  });

  // 5. При нажатии на кнопку “Sign Up”:
  // • Проверьте на существование значения в каждом текстовом поле. Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert. Сообщение должно быть следующего вида: "Заполните поле E-mail".
  // • Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.
  // • Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
  // • Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
  // • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается и пользователя перебрасывает на страницу логина (см. п.6). Модального окна в макете нет, его нужно создать самостоятельно, соблюдая общую стилистику макета.

  const signUp = document.getElementById('sign_button');
  const inputs = document.getElementsByClassName('base-input');
  signUp.addEventListener('click', (event) => {

    for (let i = 0; i < inputs.length; i++) {
      let inputValue = inputs[i].value;
      let label = inputs[i].previousElementSibling.textContent.trim();
      if (inputValue === '') {
        event.preventDefault();
        return alert('Заполните поле' + ' ' + label);
      }
    }
  });


  const passwordInput = document.getElementById('user_password-input');
  const repeatPasswordInput = document.getElementById('user_repeat_password-input');
  signUp.addEventListener('click', (event) => {

    if (passwordInput.value.length < 8) {
      event.preventDefault();
      return alert('Пароль должен содержать не менее 8 символов');
    } else if (passwordInput.value !== repeatPasswordInput.value) {
      event.preventDefault();
      return alert('Пароли из двух текстовых полей не совпадают');
    }
  });

  signUp.addEventListener('click', (event) => {

    if (!checkBox.checked) {
      event.preventDefault();
      return alert('Пожалуйста, подтвердите, что Вы ознакомились с нашими Правилами пользования')
    }
  });




}