const burger = document.querySelector('.burger')
const burgerBg = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

burger.addEventListener('click', ()=>{
  burger.classList.toggle('burger-rotate')
  nav.classList.toggle('nav-hidden')
  body.classList.toggle('hidden')
})

/* Burger. close with background */
nav.addEventListener('click', event => {
  console.log(event);
  if(event.target.className == 'nav burger-menu'){
    burger.classList.toggle('burger-rotate')
    nav.classList.toggle('nav-hidden')
    body.classList.toggle('hidden')
  }
})

/* map */
/* const map = document.querySelector('#map')
console.log(map);
map.container.fitToViewport() */

