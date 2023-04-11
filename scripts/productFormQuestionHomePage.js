document.addEventListener("DOMContentLoaded", () => {
  // form send

const questionForm = document.querySelector("#form-question")

const questionFormInputName = document.querySelector("#form-question-name")
const questionFormInputTel = document.querySelector("#form-question-tel")
const questionFormInputEmail = document.querySelector("#form-question-email")

const questionFormInputErrorName = document.querySelector("#form-question-name + p")
const questionFormInputErrorTel = document.querySelector("#form-question-tel + p")
const questionFormInputErrorEmail = document.querySelector("#form-question-email + p")

$("#form-question-tel").mask("+7 (999) 999-99-99", {autoclear: false});

questionForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  // validation name, tel, email
  if(questionFormInputName.value.length === 0) {
    questionFormInputErrorName.textContent = "Введите имя"
    return
  } else {
    questionFormInputErrorName.textContent = ""
  }
  
  if(questionFormInputTel.value.length === 0) {
    questionFormInputErrorTel.textContent = "Введите номер"
    return
  } else if (questionFormInputTel.value[questionFormInputTel.value.length-1] == "_") {
    questionFormInputErrorTel.textContent = "Введите номер до конца"
    return
  } else {
    questionFormInputErrorTel.textContent = ""
  }

  if(questionFormInputEmail.value.length === 0) {
    questionFormInputErrorEmail.textContent = "Введите email"
    return
  } else if(!/[a-z|0-9]*@[a-z]+.[a-z]+/.test(questionFormInputEmail.value)) {
    questionFormInputErrorEmail.textContent = "Введите корректный email test@mail.ru"
    return
  } else {
    questionFormInputErrorEmail.textContent = ""
  }

  const formData = new FormData(questionForm)

  const json = {
    name: formData.get("name"),
    tel: formData.get("tel"),
    email: formData.get("email"),
  }

  const response = await fetch('php/php.php', {
    method: "POST",
    body: JSON.stringify(json),
  })
    .then(res => res.json())
    .then(res => res)  
    
  questionForm.reset()

  // server message 
  const serverMessage = document.querySelector(".form-question-response")

  if(response.ok) {
    serverMessage.textContent=response.ok
    setTimeout(() => {
      serverMessage.textContent=""
    }, 3000)
  } else {
    serverMessage.textContent=response.error
    setTimeout(() => {
      serverMessage.textContent=""
    }, 3000)
  }
})
})