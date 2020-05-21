const slider1 = document.querySelector('.promo__slide-1');
const slider2 = document.querySelector('.promo__slide-2');
const button = document.querySelector('.promo__item-4');
const radio1 = document.querySelector('.promo__radio-1');
const radio2 = document.querySelector('.promo__radio-2');

function slideSlider() {
  if (slider2.hidden) {
    slider2.hidden = false;
    slider1.hidden = true;
    radio1.classList.remove('promo__radio-checked');
    radio2.classList.add('promo__radio-checked');
  }
  else {
    slider1.hidden = false;
    slider2.hidden = true;
    radio2.classList.remove('promo__radio-checked');
    radio1.classList.add('promo__radio-checked');
  }
};

button.addEventListener('click', slideSlider);
button.addEventListener('keydown', i => {
  if (i.keyCode == 13 || i.keyCode == 37 || i.keyCode == 39) slideSlider();
});