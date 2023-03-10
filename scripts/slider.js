const sliderBox = document.querySelector(".slide-box")
const leftButton = document.querySelector(".slider-button-left")
const rightButton = document.querySelector(".slider-button-right")
const slideCount = document.querySelectorAll(".slider-item")

let slideTransform = 0
let slideTransformStep = window.innerWidth > 780 ? 600 : 425

if(window.innerWidth > 780) {
  slideTransformStep = 600
} else if(window.innerWidth > 450 && window.innerWidth <= 780) {
  slideTransformStep = 425
} else if(window.innerWidth < 450) {
  slideTransformStep = 300
}

rightButton.addEventListener("click", () => {
  setButtonDisabled()
  slideTransform -= slideTransformStep
  
  if(slideTransform === -slideTransformStep*slideCount.length) {
    slideTransform = 0
  }

  sliderBox.style.transform = `translateX(${slideTransform}px)`
})

leftButton.addEventListener("click", () => {
  setButtonDisabled()
  slideTransform += slideTransformStep
  
  if(slideTransform > 0) {
    slideTransform = -slideTransformStep*(slideCount.length-1)
  }

  sliderBox.style.transform = `translateX(${slideTransform}px)`
})

function setButtonDisabled() {
  rightButton.setAttribute("disabled", true)
  leftButton.setAttribute("disabled", true)

  setTimeout(() => {
    rightButton.removeAttribute("disabled")
    leftButton.removeAttribute("disabled")
  }, 500)
}