
const accordion = document.querySelectorAll('.accordion__item');

for(item of accordion) {
  item.addEventListener('click', function() {
    this.classList.toggle('accordion__item--active');
  })
}
