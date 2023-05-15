<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

   //Envío de correo electrónico utilizando la función mail de PHP 

   
    $to = "carloscarrillodeveloper@gmail.com";
    $subject = "Mensaje de contacto";
    $emailBody = "Nombre: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Mensaje: " . $message . "\n";
    $headers = "From: " . $email;

    if (mail($to, $subject, $emailBody, $headers)) {
        echo "El mensaje se envió correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}

?>
