<?php 
// принять данные JSON
header("Content-Type: application/json");
$formData = json_decode(file_get_contents("php://input"));

// данные name, tel, email
$formName = $formData -> name;
$formTel = $formData -> tel;
$formeMail = $formData -> email;

$to = "maxim.it@bk.ru";
$subject = "Заявка на стоимость";
$message = "Имя: " . $formName . "Номер: " . $formTel . "Почта: " . $formeMail;

// отправить данные
if(mail($to, $subject, $message)){
  $toJSON = json_encode(array(
    "ok" => "Спасибо ! Мы скоро свяжемся",
  ));
  echo $toJSON;
} else {
  $toJSON = json_encode(array(
    "error" => "Что-то пошло не так ... попробуйте ещё раз",
  ));
  echo $toJSON;
}

?>