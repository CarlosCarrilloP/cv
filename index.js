function enviarFormulario() {
  // Obtener los datos del formulario
  var name = document.getElementById("input-name").value;
  var email = document.getElementById("input-email").value;
  var message = document.getElementById("input-message").value;

  // Realizar la petición AJAX
  fetch("sendform.php", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    // Mostrar el mensaje de respuesta
    alert(data);
  })
  .catch(function(error) {
    console.error("Hubo un error al enviar el formulario:", error);
  });
}



// Función que se ejecuta cuando se hace clic en el botón "Enviar Formulario"
function formSended() {
    swal({
      title: "¡Formulario enviado correctamente!",
      icon: "success"
    });
  
}
