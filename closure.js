// não compila, o hoisting elevara essa variavel para o topo, mas ela ainda sera apenas uma variavel
// só depois de inicializa-la eh que ela sera uma função
// increase();


//Existem variaveis locais que foram declaradas dentro do scopo das funcoes

// existem as variaveis globais, que são declaradas fora de uma função

// e existem os closures que são funcoes que retornam funcoes e tem acesso a uma variavel no seu scopo
// ou seja, closures tem acesso ao scopo pai mesmo se esse scopo tenha sido destruida

var increase = (function() { // funcao auto-invocada que retorna uma funcao
	var contator = 0;
	console.log(contator); // sera executado quando for declarada a funcao increase;

	return function() { // sera retornada essa funcao para chamada de increase();
		contator++;
		console.log(contator); // sera executando sempre que invocar a funcao increase();
	};
})();

// para alterar o contator somente atraves a funcao increase(). Mais ou menos como uma variavel
// global, mas somente increase encherga o scopo;
increase();
increase(); // somente a funcao increase tera acesso ao scopo da variavel contator
increase();

// criando outra funcao com scopo fechado para treino
var dicrease = (function() {
	var value = 0;
	console.log("Valor inicial função dicrease: " + value);

	return function() {
		value--;
		console.log(value);
	};
})();

dicrease();
dicrease();
dicrease();