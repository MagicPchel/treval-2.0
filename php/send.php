<?php

$contact_name = $_POST['contact_name'];
$contact_email = $_POST['contact_email'];
$ccontact_message = $_POST['contact_message'];



$contact_name = htmlspecialchars ($contact_name);
$contact_email = htmlspecialchars ($contact_email);
$contact_massage = htmlspecialchars ($contact_massage);


$contact_name = urldecode ($contact_name);
$contact_email = urldecode ($contact_email);
$contact_massage = urldecode ($contact_massage);


$contact_name = trim ($contact_name);
$contact_email = trim ($contact_email);
$contact_massage = trim ($contact_massage);


    
if(mail("vadim444516@mail.ru"
        "Новое письмо на сайте",
        "ФИО: ".$contact_name."/n".
        "Mail: ".$contact_email. "/n".
        "Сообщение: ".$contact_massage. "/n".)
        
) {
    echo ('Письмо успешно отправленно!');
}

    else{
        echo ('Есть ошибки! Проверьте данные...');
    }

?>