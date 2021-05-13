'use strict'

console.clear();

// PROGRAMACION FUNCIONAL


var original = [80, 3, 14, 22, 30];

/*

    determinar cuales de esos numeros son pares

    de esos numeros que solo me sume los > 20

    ALUMNO: DIEGO SANCHEZ C.

*/

var btn_Sum = document.querySelector("#btn_Sum");
btn_Sum.addEventListener('click', () => {
console.log("Arreglo original: " + original)
console.log("en arreglo los siguientes numeros son pares: " + Npar(original))
console.log("el resultado de los numeros en arreglo sumados que son mayores a 20 es: " + Sum(Npar(original)));
});






//Funcion Pura que devueleve Array con numeros pares
const Npar = (original) =>
{
    let cont=0;
    let arreglo = [];
    
for (let index = 0; index < original.length; index++) {
     
    
    if(original[index]%2===0)
    {
        arreglo[cont]=original[index];
        cont++;
    }
  
}
return arreglo;
}

//Funcion Pura que suma los valores del array sobre 20

const Sum = (array) =>
{
    let total = 0;
    for (let index = 0; index < array.length; index++) {
        
        if(array[index]>20){

            total+=array[index];
        } 
        
    }
    return total;
}
