
let Pnombre = document.getElementById('Pnombre')   
let Pdireccion = document.getElementById('Pdireccion')   
let Ptelefono = document.getElementById('Ptelefono')   
let Ppinia = document.getElementById('Ppinia')   


let Rnombre = document.getElementById('Rnombre')   
let Rdireccion = document.getElementById('Rdireccion')   
let Rtelefono = document.getElementById('Rtelefono')   
let Rpinia = document.getElementById('Rpinia')   

let FotoCon = document.getElementById('FotoCon')
let FotoSin = document.getElementById('FotoSin')

let card = document.getElementById('card')
let boton = document.getElementById('boton')   

const Pedir = () => {

    Rnombre.innerHTML = Pnombre.value
    Rdireccion.innerHTML = Pdireccion.value
    Rtelefono.innerHTML = Ptelefono.value
    Rpinia.innerHTML = Ppinia.value

    let pregutaPinia = Ppinia.value
    let piniaMinus = pregutaPinia.toLowerCase()
    if(piniaMinus === 'con'){
        Rpinia.innerHTML = ':('
    }else if(piniaMinus === 'sin'){
        Rpinia.innerHTML = ':)'
    }else{
        Rpinia.innerHTML = 'Datos erroneos'
    }
  
    card.classList.remove('none')
  
}

boton.addEventListener('click', Pedir)


//////////