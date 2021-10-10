// 1)-     Definí una función obtenerIndice que reciba como argumento 
// un valor cualquiera valor y un array cualquiera array y devuelva 
// el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.


// const obtenerIndice=(valor,array)=>{


// }

//  obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])
// 2
//  obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])
// -1





// 2)   Definí una función repetir que tome un valor valor y un número entero 
// cantidad, y devuelva una array con valor repetido cantidad de veces. 


// const repetir=(valor,cantidad)=>{
//     let resultado=[]
//     for (let i = 0; i < cantidad; i++) {
  
//         resultado.push(valor)
//         console.log(resultado)
//     }
    
    
//     return resultado
// }



// repetir('lovelace', 3)
// ['lovelace', 'lovelace', 'lovelace']
// repetir('a', 5)
// ['a', 'a', 'a', 'a', 'a']
// repetir('html', 0)
// []



// 3)-  Definí una función sumarImparesHasta que reciba como argumento 
// un número numero y que devuelva la suma de todos los impares empezando
//  desde 0 hasta dicho numero inclusive.

// const sumarImparesHasta=(numero)=>{
//     let resultado = 0
//     for (let i = 1; i <= numero; i+=2) {
//         resultado= resultado + i
//      console.log(i)
//      console.log(resultado)

//     }
// return resultado
// }


// sumarImparesHasta(5) // (1 + 3 + 5 = 9)
// 9 
// sumarImparesHasta(13)
// 49
// sumarImparesHasta(47)
// 576


// 3)-  Definí una función crearCuentaRegresiva que reciba como 
// argumento un número entero numeroInicial y que devuelva un array
//  con cuyo primer ítem sea numeroInicial y los demás ítems sean números 
//  enteros sucesivos descendientes, hasta llegar a 0.


// const crearCuentaRegresiva=(numeroInicial)=>{
//  let resultado= []
//  for (let i = numeroInicial; i >= 0; i--) {
//     console.log(i)
//      resultado.push(i)
    
//  }
//  console.log(resultado)
//  return resultado
// }

// crearCuentaRegresiva(3)
// [3, 2, 1, 0]
// crearCuentaRegresiva(5)
// [5, 4, 3, 2, 1, 0]


// 4)   Definí una función invertir que tome por parámetro un array 
// array y que devuelva un array con los mismos valores pero en orden invertido.

// const invertir=(array)=>{
//     let resultado=[]
//     for (let i = 0; i < array.length; i++) {
//         resultado.unshift(array[i])
        
//     }

//   return resultado
// }



// invertir([1, 2, 3]) 
// [3, 2, 1]
//invertir([5, 7, 99, 34, 54, 2, 12])
// [12, 2, 54, 34, 99, 7, 5]


// 5)-   Definí una función removerDuplicados que tome por parámetros un array
//  array y que devuelva un array con los mismos valores de array pero sin valores duplicados.



// const removerDuplicados=(array)=>{
//     let resultado = []
//     for (let i = 0; i < array.length; i++) {
      
//          if(array[i] !== array[i + 1]){
//              resultado.push(array[i])
           
//          }
//          console.log(resultado)
//     }
//     return resultado
// }


// removerDuplicados([1, 1, 1])
// [1]
//  removerDuplicados([1, 1, 2, 2, 3, 3])
// [1, 2 ,3]
//  removerDuplicados([5, 23, 8, 5, 5, 44, 23])
// [5, 23 ,8, 44]



// 6)-  Definí una función repetirLetras que reciba como argumento un 
// string palabra y un número entero cantidad, y devuelva una string donde
//  cada letra de palabra esté repetida cantidad de veces.



const repetirLetras = (palabra, cantidad) => {
  let array = palabra.split("");

  let arrayRepetido = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < cantidad; j++) {
      arrayRepetido.push(array[i]);
    }
  }

  return arrayRepetido.join("");
};



// repetirLetras('hola', 2)
// 'hhoollaa'
// repetirLetras('ada', 3)
// 'aaadddaaa'
// repetirLetras('ah!', 5)
// aaaaahhhhh!!!!!'
// repetirLetras('basta', 1)
// 'basta



// 7) Definí una función capitalizarPalabras tome un string 
// y devuelva un string donde cada palabra está capitalizada 
// (con la primera letra mayúscula). Dejá las demás letras como están.


const capitalizarPalabras = (str) => {
  const  array = str.split(" ")
  let palabras = ""

for (let i = 0; i < array.length; i++) {

  if (i === array.length -1) {
      palabras += array[i].charAt(0).toUpperCase() + array[i].slice(1)
  }else {
      palabras += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " "
  }
}

return palabras
  
}







