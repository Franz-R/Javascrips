//capturar datos de html
const n1 = document.getElementById("numero1")
const n2 = document.getElementById("numero2")
const btn = document.getElementById("boton")
var res = document.getElementById("respuesta")

function sumar(){
    const num1 = parseInt(n1.value)
    const num2 = parseInt(n2.value)
    var total = num1+num2
    res.innerText=total
}

btn.addEventListener('click',sumar)