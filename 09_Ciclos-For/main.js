// //Estructura
// // for(inicio; limite; secuencia){

// for(var i = 0;  i >= -200; i = i - 5){
//     console.log(i)
// }
// for(var i = 500;  i >= 0; i = i - 10){
//     console.log(i)
// }
// for(var i = -500;  i <= 0; i = i + 50){
//     console.log(i)
// }
// Empiece en 0  su  - 200 limite y la secuencia  5
// Empiece en 500  su limite 0 y la secuencia 10
// Empiece en -500  su limite 0 y la secuencia 50

for(var i = 0;  i <= 100; i = i + 1){
         
 
if(i % 3 === 0)
    console.log(i + "Fizz")

else if(i % 5 === 0){ 
    console.log(i + "Buzz")
}         
else(i % 3 === 0 && i % 5 === 0)
    console.log(i + "FizzBuzz")
 }
