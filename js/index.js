document.addEventListener('DOMContentLoaded', () => {
  //Раскрытие кнопки поиск
  const btnSearch = document.querySelector('.btn-search');
  const searchInput = document.querySelector('.search');

  btnSearch.addEventListener('click', (el) => {
    el.preventDefault();
    searchInput.style.width = "274px";
    console.log(123);
  });

  // Скрытие поиск при нажатии в любое место
  document.addEventListener('click', function (e) {
    if (!e.target.classList.contains('btn-search') && !e.target.classList.contains('search')) {
      searchInput.style.width = "0px";
    }
    if (e.target.classList.contains('overlay')) {
      overlay.style.display = "none";
      modal.style.display="none";
      document.body.style.overflow = 'visible';
    }
  });

  //Состояние кнопки play(pause)
  const headerBtnPlay = document.querySelectorAll('.header__btn--play');
  headerBtnPlay.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('header__btn--pause');
    });
  });

  //Модальное окно входа
  const btnLogin = document.querySelector('.header__btn--login');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnClose = document.querySelector('.btn--close');
  btnLogin.addEventListener('click', () => {
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  })

  //Закрытие модального окна
  btnClose.addEventListener('click', () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = 'visible';
  })


});