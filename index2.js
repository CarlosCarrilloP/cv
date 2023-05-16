
///////////FORMULARIO//////////
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
  
  ////////LIGHT-DARK MODE//////
  // Obtén una referencia al botón
  const botonModo = document.getElementById('boton-modo');
  
  // Escucha el evento de clic en el botón
  botonModo.addEventListener('click', cambiarModo);
  
  // Función para cambiar el modo
  function cambiarModo() {
    // Obtén una referencia al elemento <link> que contiene el archivo de estilos
    const enlaceEstilos = document.getElementById('estilos');
  
    // Verifica si el archivo de estilos actual es el estilo claro (style.css)
    if (enlaceEstilos.href.includes('style.css')) {
      // Cambia el archivo de estilos a dark.css
      enlaceEstilos.href = 'dark.css';
    } else {
      // Cambia el archivo de estilos a style.css
      enlaceEstilos.href = 'style.css';
    }
  }
  

 