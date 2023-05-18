
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

// Función que se ejecuta cuando se hace clic en el botón
function cambiarModo() {
  const body = document.body;
  body.classList.toggle('background-dark');

  const name = document.getElementsByClassName('name')[0];
  name.classList.toggle('name-dark');
  
  const titulo = document.getElementsByClassName('titulo')[0];
  titulo.classList.toggle('titulo-dark');

  const web = document.getElementsByClassName('web')[0];
  web.classList.toggle('web-dark');

  const email = document.getElementsByClassName('email')[0];
  email.classList.toggle('email-dark');

  const habout = document.getElementsByClassName('habout')[0];
  habout.classList.toggle('habout-dark');

  const pabout = document.getElementsByClassName('pabout')[0];
  pabout.classList.toggle('pabout-dark');

  const hprojects = document.getElementsByClassName('hprojects')[0];
  hprojects.classList.toggle('hprojects-dark');
  
}





  
 ///////Bounce de los iconos del section about cuando llega el viewport////////////
