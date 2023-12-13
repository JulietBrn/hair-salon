/* SLiDER */
const closeBtn = document.querySelector('.close-btn')
const sliderWrapper = document.querySelector('.slider-wrapper')
let sliderImg = document.querySelector('.slider-contant__img')
const arrPrev = document.querySelector('#arrow-prev')
const arrNext = document.querySelector('#arrow-next')


function closeSlider() {
  sliderWrapper.classList.remove('active-slider')
  sliderWrapper.classList.add('hidden-slider')
  body.style.overflow = 'auto'
}
/* close slider by X */
closeBtn.addEventListener('click', ()=> {
  closeSlider()
})
/* close by bg */
sliderWrapper.addEventListener('click', event => {
  if(event.target.className == 'slider-wrapper active-slider' || event.target.className == 'slider-contant__wrapper slider-contant'){
    closeSlider()
  }
})

/* close by esc */
document.addEventListener('keydown', (e)=> {
  console.log(e);
  if(e.code === 'Escape') {
    closeSlider()
  }
})

const imgs = document.querySelectorAll('.slide-el')
let index

imgs.forEach((img, i) => {
  img.addEventListener('click', ()=> {
    index = i
    showImage(index)
    sliderWrapper.classList.remove('hidden-slider')
    sliderWrapper.classList.add('active-slider')
    toStyleOpacityArr()
    body.style.overflow = 'hidden'
  })
})


function showImage(index) {
  let currentImgSrc = imgs[index].attributes[1].textContent
  sliderImg.attributes[1].textContent = currentImgSrc
}

/* to left */
arrPrev.addEventListener('click', ()=> {
  toLeft()
})
function toLeft() {
  if(index !== 0) {
    index = index-1
    showImage(index)
    toStyleOpacityArr()
  }
}

/* to right */
arrNext.addEventListener('click', ()=> {
  toRight()
})
function toRight() {
  if(index !== imgs.length-1) {
    index = index+1
    showImage(index)
    toStyleOpacityArr()
  }
}

/* if slide is the last or slide is the 0 - opacity .3 */
function toStyleOpacityArr(){
  if(index === 0) {
    arrPrev.style.opacity = '.4'
  } else
  if(index === imgs.length-1) {
    arrNext.style.opacity = '.4'
  } else {
    arrPrev.style.opacity = '1'
    arrNext.style.opacity = '1'
  }
}

/* swap  'touchstart' и 'touchend'  */
let start
let change

sliderWrapper.addEventListener('touchstart', (e) => {
  start = e.touches[0].clientX
})
sliderWrapper.addEventListener('touchmove', (e) => {

  let touch = e.touches[0].clientX
  change = start - touch
})
sliderWrapper.addEventListener('touchend', (e)=> {
  if(change !== 0) {
    moveWrap()
    change = 0
  }
})

function moveWrap() {
  if(change >= 10) {
    toRight()
  } else if (change < -10) {
    toLeft()
  }
}
