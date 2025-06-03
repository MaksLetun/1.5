let cardList = document.querySelector('.card-list');
let hideButton = document.querySelector('.action__button');
let textSpan = document.querySelector('.action__text');
let icon = document.querySelector('.action__icon');

hideButton.addEventListener('click', function () {
    if (textSpan.textContent === 'Показать все') {
        cardList.classList.remove('visible');
        textSpan.textContent = 'Скрыть';
        icon.classList.add('rotate')
    }

    else {
        cardList.classList.add('visible');
        textSpan.textContent = 'Показать все';
        icon.classList.remove('rotate')
    }
  });

  const swiper = new Swiper('.swiper', {
    spaceBetween: -9,
    slidesPerView: 'auto',
    speed: 1000,
    loop: false,
    allowTouchMove: true,
    autoHeight: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });