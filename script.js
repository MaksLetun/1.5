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
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});