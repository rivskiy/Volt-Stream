//Mobile menu
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.burger');
const menuOverlay = document.querySelector('.header__nav-overlay');
const menuLink = document.querySelectorAll('.nav__link');

function showMenu() {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.classList.toggle('lock');
}

menuBtn.addEventListener('click', showMenu);

menuOverlay.addEventListener('click', showMenu);

for (const link of menuLink) {
  link.addEventListener('click', showMenu);
};

//Accordion
const accordion = document.querySelectorAll('.accordion__item');

for(item of accordion) {
  item.onclick = function() {
    this.classList.toggle('accordion__item--active');
  };
};
