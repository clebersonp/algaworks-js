// fazer scopo dentro do javascript - Chamada função auto invocada.
// declarar a função e logo em seguida invoca-la com funcao anonima
// serve para isolar o scopo. no angular podemos fazer isso para isolar um modulo.


// funcao anonima auto-invocada

(function () {
	var a = 1; // so sera enchergada dentro do scopo dessa função
	console.log(a);
})(); // () serve para invocar a funcao anonima

// console.log(a); não compila pois essa variavel não foi declarada

