const buttons = document.querySelectorAll('.services__sliderBut');
const sliders = document.querySelectorAll('.services__slide');

buttons.forEach((button,a) => {
  button.addEventListener('click',()=> {

    buttons.forEach(i => i.classList.remove('services__sliderBut-active'));
    sliders.forEach(i => i.hidden = true);

    button.classList.add('services__sliderBut-active');
    sliders[a].hidden = false;
    
  });
});