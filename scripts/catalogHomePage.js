// document.addEventListener('DOMContentLoaded', () => {

// })

// variables
const closeModalBtn = document.querySelectorAll(".our-products-catalog__close-btn")
const openModalBtn = document.querySelectorAll(".our-products-list-item__button")
const modals = document.querySelectorAll(".our-products-catalog")
const modalListItems = document.querySelectorAll('.our-products-catalog__list-item')
const ourProductsItem = document.querySelectorAll(".our-products-list-item")
const sublists = document.querySelectorAll('.our-products-catalog__sublist')
const backgroundOutsideModal = document.querySelector(".background-outside-modal")

// set listeneres

  // close modal
  closeModalBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
      modals[index].style.display = 'none'
      modals[index].style.zIndex = '-1'
      document.body.style.overflowY = ""

      // remove background outside modal
      backgroundOutsideModal.style.display = "none"
    })
  })


  // open modal
  openModalBtn.forEach((button, index) => {

    button.addEventListener('click', () => {    

      // clear all modal
      modals.forEach(modal => {
        modal.style.display = "none"
        modal.style.display = '-1'
      })

      // clear all sublists
      sublists.forEach(item => {
        item.style.display = "none"
      })

      // set styles modal && body
      document.body.style.overflowY = "hidden"
      modals[index].style.display = 'block'
      modals[index].style.zIndex = '1'

      // scroll to product
      ourProductsItem[index].scrollIntoView({
        block: "center", 
        behavior: "smooth"
      })
        // надо проверить на мобилках
          // if(window.innerWidth > 780) {
          //   ourProductsItem[index].scrollIntoView({
          //     block: "center", 
          //     behavior: "smooth"
          //   })
          // } else {
          //   ourProductsItem[index].scrollIntoView({
          //     block: "start", 
          //     behavior: "smooth"
          //   })
          // }

      // show background outside modal
      backgroundOutsideModal.style.display = "block"

    })

  })

// set close / open sublist
modalListItems.forEach(item => {
  item.addEventListener("click", () => {

    if(item.id === "modal-1") {
      const subList = document.querySelector("#modal-1 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } else if (item.id === "modal-2") {
      const subList = document.querySelector("#modal-2 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } else if (item.id === "modal-3") {
      const subList = document.querySelector("#modal-3 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } else if (item.id === "modal-4") {
      const subList = document.querySelector("#modal-4 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } else if (item.id === "modal-5") {
      const subList = document.querySelector("#modal-5 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } else if (item.id === "modal-6") {
      const subList = document.querySelector("#modal-6 > .our-products-catalog__sublist")
      subList.style.display = subList.style.display === "block" ? "none" : "block"
    } 

  })
})
