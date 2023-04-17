/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = [];

   arregloDeArreglos = Object.entries(objeto).map(([clave, valor]) => [clave, valor]);
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objeto = {};
   var objetoOrdenado = {};

   string.split('').forEach(letra => {
      if(objeto[letra]){
         objeto[letra]++;
      }
      else objeto[letra] = 1;
   });
   
   objetoOrdenado = Object.fromEntries(Object.entries(objeto).sort());
   return objetoOrdenado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   // split convierte String en arreglo.
   var stringCom = string.split('');
   
   var mayus = stringCom.filter((letra) => letra ===letra.toUpperCase());
   var minus = stringCom.filter((letra) => letra ===letra.toLowerCase());
   //join convierte un Arreglo a String
   var mayusPrimero = mayus.concat(minus).join('');

   return mayusPrimero;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var array = frase.split(' ');
   
   var nuevoString;
   // invertido lo convertimos con join a cadena de caracteres String y lo almacenamos en nuevoString.
   var invertido = [];
   //for para entrar a cada arreglo e invertir con metodo sort
   for(var i = 0; i < array.length; i ++){
      invertido[i] = array[i].split('').reverse().join('');
   }

   nuevoString = invertido.join(' ');

   return nuevoString;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroCap = numero.toString().split('').reverse().join('');
   numeroCap = Number(numeroCap);
   
   if(numero === numeroCap)
   return 'Es capicua';
   else return 'No es capicua';

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   var arr = string.split('');
   for(var i = 0; i < arr.length; i++){
      if (arr[i] == 'a' )
      arr.splice(i,1);
      if (arr[i] == 'b')
      arr.splice(i,1);
      if(arr[i] == 'c')
      arr.splice(i,1);
   }

   return arr.join('');


}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   newArray = arrayOfStrings.sort((a,b) =>
   a.length - b.length);

   return newArray;

   

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let newArray = [];
   var mayor = [];
   var menor = [];
   if (array1.length > array2.length){
      mayor = array1;
      menor = array2;
   } else {
      mayor = array2;
      menor = array1;
   }
   for(let i = 0; i < menor.length; i++){
      for(let j = 0; j < mayor.length; j++){
         if (menor[i] == mayor[j]){
               newArray.push(menor[i]);
               var bool = true;
            }
      }
   } 
   let arrVacio = []
   if(bool !== true)
      return arrVacio;
      
      return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
