

const formulario = document.querySelector(".formulario");
//crear evento
formulario.addEventListener("submit", validar)

 function validar(e){
         e.preventDefault();
         
     const usuario = document.getElementById("user").value
     const contraseña = document.getElementById("pass").value
    if (usuario =="admin" && contraseña == "1234") {
        window.location = "pagina.html"
    }
    }
