// no js a string eh imutavel assim como no java
var nomes = "Cleberson, Bruna, João, Fernando, Allan, Paula, Ricardo";
var texto = "The winter is coming, coming!";
console.log(texto);

// tamanho de caracteres
console.log(texto.length);

// retornar um substring
console.log(texto.slice(4, 10));
console.log(texto.slice(4, -8));

// substring
console.log(texto.substring(4, 10));

// encontra o indice da primeira ocorrencia
console.log(texto.indexOf("coming"));

// encontra o indice da ultima ocorrencia
console.log(texto.lastIndexOf("coming"));

// substitui uma palavra por outra
console.log(texto.replace("winter", "summer"))

// caixa alta
console.log(texto.toUpperCase());

// caixa baixa
console.log(texto.toLowerCase());

// concatenar com strings
console.log(texto + "!!");

// concatenar com a funcao concat
console.log(texto.concat("!", "!", "?"));

// transformar variavel string em array, igual no java
console.log(nomes.split(", "));