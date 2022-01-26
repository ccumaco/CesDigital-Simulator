<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];




$payload = file_get_contents('php://input');
var_dump($payload);
json_decode($payload);
var_dump($payload);

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "objeto json " . $payload . " \r\n";
$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());


$payload = file_get_contents('php://input');
var_dump($payload);
json_decode($payload);
var_dump($payload);

$para = 'carloscumaco5@gmail.com';
$asunto = 'Mensaje de prueba php';

mail($para, $asunto, utf8_decode($message), $header);



header("Location:index.html");
?>