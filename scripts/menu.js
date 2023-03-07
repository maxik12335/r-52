// Вынести в отдельный файл !
// Функция по избавлению от лишнего текста в заголовках
const productTitle = document.querySelectorAll('.product-text')

productTitle.forEach(item => {
  if(item.textContent.trim().length > 70) {
    item.textContent = item.textContent.slice(0,70) + "..."
  }
})


const catalogLink = document.querySelector("[data-catalog]")
const catalog = document.querySelector(".catalog")
const catalogClose = document.querySelector(".catalog .close")

catalogLink.addEventListener("click", () => {
  document.querySelector("body").style.overflow = "hidden"
  catalog.classList.add("catalog-show")
})

catalogClose.addEventListener("click", (event) => {
  console.log(event.target)
  catalog.classList.remove("catalog-show")
  document.querySelector("body").style.overflow = ""
})

const subLists = document.querySelectorAll(".sublist-end")
const buttonOpenSubList = document.querySelectorAll(".catalog-list__button")

buttonOpenSubList.forEach((button, index) => {
  button.addEventListener("click", () => {
    if(subLists[index].classList.contains("sublist-end-show")) {      
      subLists[index].classList.remove("sublist-end-show")  
      return
    }

    subLists.forEach(list => {
      list.classList.remove("sublist-end-show")  
    })

    subLists[index].classList.add("sublist-end-show")
  })
})


// mobile menu

const mobileMenuClose = document.querySelector(".mobile-menu__close")
const mobileMenuOpen = document.querySelector(".mobile-menu")
const header = document.querySelector(".header")

mobileMenuClose.addEventListener("click", () => {
  header.style.opacity = 0
  header.style.zIndex = -1
  document.querySelector("body").style.overflow = ""
})

mobileMenuOpen.addEventListener("click", () => {
  header.style.opacity = 1
  header.style.zIndex = 1
  document.querySelector("body").style.overflow = "hidden"
})