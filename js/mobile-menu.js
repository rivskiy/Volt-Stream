let modal = document.querySelector('.header__nav');
let btnOpen = document.querySelector('.burger');
let btnClose = document.querySelector('.close-btn');

btnOpen.onclick = function () {
  modal.classList.remove('header__nav--close');
};

btnClose.onclick = function () {
  modal.classList.add('header__nav--close');
};
