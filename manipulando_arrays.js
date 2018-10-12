var array = "Ned Jon Robb Bran Rickon".split(' '); // criar um array a partir de uma string

console.log(array.toString()); // convertendo o array em string
console.log(array.join(' | ')); // convertendo o array para string com um delimitador(glue)

array.push("Sansa"); // adicionar um elemento no fim do array
array.unshift("Philip"); // adicionar um elemento no inicio do array

console.log(array);

var elementoRemovido1 = array.pop(); // remove o ultimo elemento do array

console.log("Elemento removido: " + elementoRemovido1);
console.log(array);

var elementoRemovido2 = array.shift(); // remove o primeiro elemento do array
console.log("Elemento removido: " + elementoRemovido2);
console.log(array);

array[1] = 'Jon snow'; // alterando um elemento no array

console.log(array);


var slice = array.slice(3, 5); // retorna um novo array com os elementos da posição inical até a posição final não inclusa, mas não altera o array original
console.log(slice);
console.log(array);


var splice = array.splice(1, 1, "Arya", "Den"); // remove os elementos informados pela posicao inical e a quantidade de elementos, e pode adicionar elementos. Altera o array original e retorna os elementos removidos

console.log("Elementos removidos pelo splice: " + splice);
console.log(array);


// concatenando dois arrays, retorna um novo array
array = array.concat(slice, splice);

console.log(array);

