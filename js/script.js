//Mobile menu
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.burger');
const menuOverlay = document.querySelector('.header__nav-overlay');
const menuLink = document.querySelectorAll('.nav__link');

menuBtn.onclick = function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.classList.toggle('lock');
};

menuOverlay.onclick = function() {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.classList.toggle('lock');
};

for(let i = menuLink.length; i--;) {
  menuLink[i].onclick = function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('lock');
  };
};

//Accordion
const accordion = document.querySelectorAll('.accordion__item');

for(item of accordion) {
  item.onclick= function() {
    this.classList.toggle('accordion__item--active');
  };
};
