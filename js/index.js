const bugregBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const accordeonQuestion = document.querySelectorAll('.accordeon__question');

bugregBtn.addEventListener('click', function()  {
   burgerMenu.classList.toggle('burger__menu--active');
   bugregBtn.classList.toggle('burger-active');
})

accordeonQuestion.forEach(element => {
   element.addEventListener('click', function() {
      const clickAnswer = element.parentElement.querySelector('.accordeon__answer');
      element.classList.toggle('accordeon__question--active');
      clickAnswer.classList.toggle('accordeon__answer--visible');
   })
})

accordeonQuestion.forEach(element => {
   element.addEventListener('click', function() {
      const clickAnswer = element.parentElement.querySelector('.accordeon__answer');
      element.classList.toggle('accordeon__question--active');
      clickAnswer.classList.toggle('accordeon__answer--visible');
   })
})

