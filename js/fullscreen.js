// простой способ
let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
}

burger.addEventListener('click' , toggleMenu);