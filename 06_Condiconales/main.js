// ------------------------- Challenge 2-------------------
//Decir si el usuario puede pasar o no
//Password : perritoSalchicha123

var preguntaPerfil = prompt('Ingresa tu nombre de prefil')
console.log(preguntaPerfil)
var pregunta1 = prompt('Ingresa tu contraseña')
console.log(pregunta1)

if(preguntaPerfil === "Angel10")
    console.log('Perfil Encontrado')
else{
    console.('Perfil no encontrado, verifica tus datos')
}

if(pregunta1 === "perritoSalchicha123")
    console.log('Bienvenido')
else{
    console.warn('Contraseña incorrecta, verifica tus datos')
}
