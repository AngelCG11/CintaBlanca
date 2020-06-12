
var J1 = (prompt('Turno de Jugador 1')).toLowerCase()
    console.log(J1)
var J2 = (prompt('Turno de Jugador 2')).toLowerCase()
    console.log(J2)
var G1= ('Gano el jugador 1')  
var G2= ('Gano el jugador 2')
if(J1 === J2){
    console.log("Empate")
}else if(J1 === 'piedra' && J2 === 'tijera')
    console.log(G1)
          else if(J1 === 'piedra' && J2 === 'papel')
         console.log(G2)
         else if(J1 === 'papel' && J2 === 'tijera')
         console.log(G2)
         else if(J1 === 'tijera' && J2 === 'papel')
         console.log(G1)
         else if(J1 === 'papel' && J2 === 'piedra')
         console.log(G1)
         else if(J1 === 'tijera' && J2 === 'piedra')
         console.log(G2)
         else{  
        console.error('error, revisa tus datos')
        }



    


