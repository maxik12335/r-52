const modalOrder = document.querySelector(".modal-order")
const modalOrderClose = document.querySelector(".modal-order__close")
const modalOrderOpenButton = document.querySelector(".price")

modalOrderClose.addEventListener("click", () => {
  modalOrder.classList.remove("modal-order-show")
})

modalOrderOpenButton.addEventListener("click", () => {
  modalOrder.classList.add("modal-order-show")
})

// form send

const orderForm = document.querySelector("#modal-order-form")

const orderFormInputName = document.querySelector("#order-form-name")
const orderFormInputTel = document.querySelector("#order-form-tel")
const orderFormInputEmail = document.querySelector("#order-form-email")

const orderFormInputErrorName = document.querySelector("#order-form-name + p")
const orderFormInputErrorTel = document.querySelector("#order-form-tel + p")
const orderFormInputErrorEmail = document.querySelector("#order-form-email + p")

$("#order-form-tel").mask("+7 (999) 999-99-99", {autoclear: false});

orderForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  // validation name, tel, email
  if(orderFormInputName.value.length === 0) {
    orderFormInputErrorName.textContent = "Введите имя"
    return
  } else {
    orderFormInputErrorName.textContent = ""
  }
  
  if(orderFormInputTel.value.length === 0) {
    orderFormInputErrorTel.textContent = "Введите номер"
    return
  } else if (orderFormInputTel.value[orderFormInputTel.value.length-1] == "_") {
    orderFormInputErrorTel.textContent = "Введите номер до конца"
    return
  } else {
    orderFormInputErrorTel.textContent = ""
  }

  if(orderFormInputEmail.value.length === 0) {
    orderFormInputErrorEmail.textContent = "Введите email"
    return
  } else if(!/[a-z|0-9]*@[a-z]+.[a-z]+/.test(orderFormInputEmail.value)) {
    orderFormInputErrorEmail.textContent = "Введите корректный email test@mail.ru"
    return
  } else {
    orderFormInputErrorEmail.textContent = ""
  }

  const formData = new FormData(orderForm)

  const json = {
    name: formData.get("name"),
    tel: formData.get("tel"),
    email: formData.get("email"),
  }

  const response = await fetch('../../../../../php/php.php', {
    method: "POST",
    body: JSON.stringify(json),
  })
    .then(res => res.json())
    .then(res => res)  
    
  orderForm.reset()

  // server message 
  const serverMessage = document.querySelector(".modal-order-response")

  if(response.ok) {
    serverMessage.textContent=response.ok
    setTimeout(() => {
      modalOrder.classList.remove("modal-order-show")
    }, 3000)
  } else {
    serverMessage.textContent=response.error
    setTimeout(() => {
      modalOrder.classList.remove("modal-order-show")
    }, 3000)
  }
})