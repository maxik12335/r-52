const catalogLink = document.querySelector("[data-catalog]")
const catalog = document.querySelector(".catalog")
const catalogClose = document.querySelector(".close")

catalogLink.addEventListener("click", () => {
  catalog.classList.add("catalog-show")
})

catalogClose.addEventListener("click", () => {
  catalog.classList.remove("catalog-show")
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
