//Existem variaveis locais que foram declaradas dentro do scopo das funcoes
// existem as variaveis globais, que são declaradas fora de uma função
// e existe os closures que são funcoes que retornam funcoes e tem acesso a uma variavel no seu scopo
// ou seja, closures tem acesso ao scopo pai mesmo se esse scopo tenha sido destruida

var tick = (function() { // funcao auto-invocada que retorna uma funcao
	var contator = 0;
	console.log(contator); // sera executado quando for declarada a funcao tick;

	return function() { // sera retornada essa funcao para chamada de tick();
		contator++;
		console.log(contator); // sera executando sempre que invocar a funcao tick();
	};
})();

// para alterar o contator somente atraves a funcao tick(). Mais ou menos como uma variavel
// global, mas somente tick encherga o scopo;
tick(); // somente a funcao tick tera acesso ao scopo da variavel contator
tick();
tick();