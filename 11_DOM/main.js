// getElementById busca el id en nuestro archivo HTML

let pregunta1 = document.getElementById('pregunta1')
let pregunta2 = document.getElementById('pregunta2')
let pregunta3 = document.getElementById('pregunta3')
let pregunta4 = document.getElementById('pregunta4')

let respuesta1 = document.getElementById('respuesta1')
let respuesta2 = document.getElementById('respuesta2')
let respuesta3 = document.getElementById('respuesta3')
let respuesta4 = document.getElementById('respuesta4')

let boton = document.getElementById('boton')

const Pedir = () => {
    console.log(pregunta1.value)
    respuesta1.innerHTML = pregunta1.value

    console.log(pregunta2.value)
    respuesta2.innerHTML = pregunta2.value

    console.log(pregunta3.value)
    respuesta3.innerHTML = pregunta3.value

    console.log(pregunta4.value)
    respuesta4.innerHTML = pregunta4.value
}
boton.addEventListener('click', Pedir)
