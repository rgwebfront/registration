window.onload = function () {


  // 2. В поле "Full Name" запретите вводить цифры.

  const fullNameElement = document.getElementById('full_name-input');
  fullNameElement.onkeydown = (e) => {
    let letter = parseInt(e.key);
    if (!isNaN(letter)) {
      return false;
    }
  };

  // 3. В поле "Your username" запретите вводить точки и запятые.
  const userNameElement = document.getElementById('user_name-input');
  userNameElement.onkeydown = (e) => {
    let symbol = e.key;
    if (symbol === '.' || symbol === ',') {
      return false
    }
  };

  // 4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.

  const checkBoxElement = document.getElementById('custom-checkbox');
  checkBoxElement.addEventListener('click', (event) => {
    if (checkBoxElement.checked) {
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

  const signUpElement = document.getElementById('sign_button');

  signUpElement.addEventListener('click', (event) => {
    validateForm(event);
  });

  const popupBgElement = document.querySelector('.popup__bg');
  const popupElement = document.querySelector('.popup');
  const closePopupButtonElement = document.querySelector('.popup__close');
  const popupButtonElement = document.querySelector('.popup__button');

  function validateForm(event) {
    event.preventDefault();

    const inputsElement = document.getElementsByClassName('base-input');

    for (let i = 0; i < inputsElement.length; i++) {
      let inputValue = inputsElement[i].value;
      let label = inputsElement[i].previousElementSibling.textContent.trim();
      if (inputValue === '') {
        return alert('Заполните поле' + ' ' + label);
      }
    }

    const passwordInputElement = document.getElementById('user_password-input');
    const repeatPasswordInputElement = document.getElementById('user_repeat_password-input');

    if (passwordInputElement.value.length < 8) {
      return alert('Пароль должен содержать не менее 8 символов');
    } else if (passwordInputElement.value !== repeatPasswordInputElement.value) {
      return alert('Пароли из двух текстовых полей не совпадают');
    }

    if (!checkBoxElement.checked) {
      return alert('Пожалуйста, подтвердите, что Вы ознакомились с нашими Правилами пользования')
    }

    popupBgElement.classList.add('active');
    popupElement.classList.add('active');
  };


  document.addEventListener('click', (event) => {
    if (event.target === closePopupButtonElement || event.target === popupBgElement) {
      popupBgElement.classList.remove('active');
      popupElement.classList.remove('active');
    }
  });


  // 6. При нажатии на ссылку «Already have an account?», а также на кнопку «ОК» в попапе реализовать имитацию перехода на страницу логина. Для этого с исходной страницей с помощью JS нужно произвести следующие действия:
  // • Текст "Get your free account" заменить на "Log in to the system".
  // • Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
  // • Блок с чекбоксом также удалить.
  // • Текст в кнопке заменить на «Sign In».
  // • Ссылку "Already have an account?" удалить.
  // • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены. Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.

  const haveAccountElement = document.getElementById('have-account');
  const inputsClearElement = document.getElementsByClassName('base-input');

  function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    Array.from(elements).forEach(element => {
      element.remove();
    })
  };

  document.addEventListener('click', (event) => {
    if (event.target === haveAccountElement || event.target === popupButtonElement) {
      popupBgElement.classList.remove('active');
      popupElement.classList.remove('active');
      for (let i = 0; i < inputsClearElement.length; i++) {
        if (inputsClearElement[i].value !== '') {
          inputsClearElement[i].value = '';
        }
      }
      document.getElementsByClassName('main__title')[0].textContent = "Log in to the system";

      removeElementsByClass('full_name');
      removeElementsByClass('user_mail');
      removeElementsByClass('user_repeat_password');
      removeElementsByClass('user_confirmation');
      removeElementsByClass('user_authorization');

      signUpElement.textContent = "Sign In";
      const passwordInputElement = document.getElementById('user_password-input');
      signUpElement.addEventListener('click', (event) => {
        if (userNameElement.value && passwordInputElement.value && passwordInputElement.value.length >= 8) {
          alert('Добро пожаловать, ' + userNameElement.value + '!');
          location.reload();
        }
        else {
          alert('Ошибка ввода, попробуйте еще раз');
        }

      });
    }

  });
}

