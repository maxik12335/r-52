document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".home-page-list__item")

  const modal = document.querySelector(".modal-list-item")
  const modalTitle = document.querySelector(".modal-list-item__title")
  const modalDescription = document.querySelector(".modal-list-item__description")

  const desctriptionsObj = {
    traidIn: 
      "Трейд ин - это выгодное предложение для тех, кто хочет обновить свою кресло-коляску. Эта программа предоставляет возможность сдать свою старую кресло-коляску и получить скидку на новую. Таким образом, вы можете сэкономить деньги и приобрести новую кресло-коляску по более выгодной цене",
    ourProduction: 
      "Наше производство - это современный завод, оснащенный самым современным оборудованием. Мы производим качественные товары, которые отвечают всем требованиям и нормам качества. Наши специалисты постоянно работают над улучшением производственных процессов, чтобы наши товары были еще лучше",
    patronageService: 
      "Патронажная служба - это команда профессионалов, которые заботятся о безопасности и комфорте наших клиентов. Мы предоставляем широкий спектр услуг, начиная от перевозки грузов и заканчивая организацией мероприятий. Наша команда всегда готова помочь вам в любое время дня и ночи. Мы гарантируем качество наших услуг и полную безопасность ваших грузов"
  }

  startModal()

  setListeners()
  
  function startModal() {
    modal.style.display = "block"
    modalTitle.textContent = items[0].textContent
    modalDescription.textContent = "Трейд ин - это выгодное предложение для тех, кто хочет обновить свою кресло-коляску. Эта программа предоставляет возможность сдать свою старую кресло-коляску и получить скидку на новую. Таким образом, вы можете сэкономить деньги и приобрести новую кресло-коляску по более выгодной цене"
  }

  function setListeners() {
    items.forEach((item, index) => {
      item.addEventListener("click", (event) => {
    
        let itemText = event.target.textContent
    
        if(index === 3) {
          modal.style.display = "none"  
          return
        }
    
        modal.style.display = "block"
        modalTitle.textContent = itemText
        modalDescription.textContent = setDescription()

        if(window.innerWidth < 780)
        document.querySelector("#about").scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
    
        function setDescription() {
          if(index === 0) {
            return desctriptionsObj.traidIn
          } else if(index === 1) {
            return desctriptionsObj.ourProduction
          } else if(index === 2) {
            return desctriptionsObj.patronageService
          }
        }
      })
    })
  }
})