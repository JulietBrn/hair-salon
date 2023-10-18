const burger = document.querySelector('.burger')
const burgerBg = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav')

burger.addEventListener('click', ()=>{
  burger.classList.toggle('burger-rotate')
  nav.classList.toggle('nav-hidden')
  nav.classList.toggle('burger-menu')
})

/* close with background */
nav.addEventListener('click', event => {
  console.log(event);
  if(event.target.className == 'nav burger-menu'){
    burger.classList.toggle('burger-rotate')
    nav.classList.toggle('nav-hidden')
    nav.classList.toggle('burger-menu')
  }
})
