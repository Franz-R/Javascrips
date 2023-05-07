const formulario = document.querySelector(".formulario")

//crear evento y llamar funcion
formulario.addEventListener("submit", validar)

//crear funcion
function validar(e){
    e.preventDefault()
    const nombre = document.querySelector("#name").value
    const edad = document.querySelector("#age").value
    
    const respuesta = document.getElementById("respuesta");

   const total = 2023 - edad;
    respuesta.textContent = `Hola ${nombre} su fecha de nacimiento es ${total}`

}

