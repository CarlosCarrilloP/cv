<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postBody = json_decode(file_get_contents("php://input"),true);
    
    $name = $postBody["name"];
    $email = $postBody["email"];
    $message = $postBody["message"];

   //Envío de correo electrónico utilizando la función mail de PHP 
    $to = "carloscarrillodeveloper@gmail.com";
    $subject = "Mensaje de contacto";
    $emailBody = "Nombre: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Mensaje: " . $message . "\n";
    $headers = "From: " . $email;

    if (mail($to, $subject, $emailBody, $headers)) {
        $response = array('success' => true, 'message' => 'El mensaje se envió correctamente.');
    } else {
        $response = array('success' => false, 'message' => 'Hubo un error al enviar el mensaje.');
    }
    header('Content-Type: application/json');
    echo json_encode($response);
}
