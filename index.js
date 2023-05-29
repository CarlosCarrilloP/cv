///////////FORMULARIO//////////
function enviarFormulario() {
  // Obtener los datos del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validar el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    swal({
      title: "Correo electrónico inválido",
      icon: "error",
    });
    return; // Detener la ejecución si el correo electrónico no es válido
  }
  // Realizar la petición AJAX
  fetch("sendform.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJson) {
      console.log(responseJson);
      if (responseJson.success) {
        console.log("Hola");
        swal({
          title: responseJson.message,
          icon: "success",
        });
      } else {
        swal({
          title: responseJson.message,
          icon: "error",
        });
      }
    })
    .finally(function () {
      // Limpiar los campos del formulario

      document.getElementById("form").reset();
    })
    .catch(function (error) {
      console.error("Hubo un error al enviar el formulario:", error);
    });
}

////////LIGHT-DARK MODE//////

// Obtén una referencia al botón
const botonModo = document.getElementById("boton-modo");

// Escucha el evento de clic en el botón
botonModo.addEventListener("click", cambiarModo);

// Función que se ejecuta cuando se hace clic en el botón
function cambiarModo() {
  const body = document.body;
  body.classList.toggle("background-dark");

  const name = document.getElementsByClassName("name")[0];
  name.classList.toggle("name-dark");

  const titulo = document.getElementsByClassName("titulo")[0];
  titulo.classList.toggle("titulo-dark");

  const web = document.getElementsByClassName("web")[0];
  web.classList.toggle("web-dark");

  const email = document.getElementsByClassName("email")[0];
  email.classList.toggle("email-dark");

  const habout = document.getElementsByClassName("habout")[0];
  habout.classList.toggle("habout-dark");

  const pabout = document.getElementsByClassName("pabout")[0];
  pabout.classList.toggle("pabout-dark");

  const hprojects = document.getElementsByClassName("hprojects")[0];
  hprojects.classList.toggle("hprojects-dark");
}

///////Bounce de los iconos del section about cuando llega el viewport////////////

// Crear una instancia del Intersection Observer
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var btn = document.querySelectorAll(".img-about-me");
      btn.forEach(function (element) {
        element.classList.add("bounce-top2");
      });
    }
  });
});

// Observar el elemento objetivo
var bottonAbout = document.querySelector(".bottonAbout");
if (bottonAbout && bottonAbout.offsetHeight > 0) {
  observer.observe(bottonAbout);
}
