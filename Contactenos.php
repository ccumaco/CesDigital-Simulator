<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$service = $_POST['service'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Teléfono de contacto: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Servicio: " . $_POST['service'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$esteban = 'carloscumaco5@gmail.com';
$miguel = 'macgraficas1267@gmail.com';
$asunto = 'Formulario lleno';

mail($esteban, $asunto, utf8_decode($message), $header);
mail($miguel, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>