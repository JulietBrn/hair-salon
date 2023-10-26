/* SLiDER */
const closeBtn = document.querySelector('.close-btn')
const sliderWrapper = document.querySelector('.slider-wrapper')
let sliderImg = document.querySelector('.slider-contant__img')
const arrPrev = document.querySelector('#arrow-prev')
const arrNext = document.querySelector('#arrow-next')
console.dir(sliderImg);

function closeSlider() {
  sliderWrapper.classList.remove('active-slider')
  sliderWrapper.classList.add('hidden-slider')
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
  if(e.code === 'Escape') {
    closeSlider()
    console.log('close');
  }
})

const imgs = document.querySelectorAll('.slide-el')
let index
console.log(imgs);
imgs.forEach((img, i) => {
  img.addEventListener('click', ()=> {
    index = i
    showImage(index)
    sliderWrapper.classList.remove('hidden-slider')
    sliderWrapper.classList.add('active-slider')
    toStyleOpacityArr()
  })
})


function showImage(index) {
  let currentImgSrc = imgs[index].attributes[1].textContent
  sliderImg.attributes[1].textContent = currentImgSrc
}

/* to left */
arrPrev.addEventListener('click', ()=> {
  if(index !== 0) {
    index = index-1
    showImage(index)
    toStyleOpacityArr()
  }
})

/* to right */
arrNext.addEventListener('click', ()=> {
  if(index !== imgs.length-1) {
    index = index+1
    showImage(index)
    toStyleOpacityArr()
  }
})

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

