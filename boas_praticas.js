// evitar de usar variaveis globais, são usadas por todos os arquivos js.
var variavelGlobal = "";

// o ideal, sempre que for fazer um arquivo .js é criar as variaveis no seu scopo usando funcao auto executada;
// as variaveis serao visiveis somente neste script(arquivo) e não sera acessado por outros scripts
(function(){

	// primeiro declara as variavies e depois inicializa
	// declarar as variaveis no topo, já que o javascript trabalha com hoisting, evitando confusões
	var escopoLocal,
		outraVariavel,
		foo,
		obj,
		array;

	escopoLocal = "escopo"; // usar aspas duplas para padronizar entre linguagens
	console.log(escopoLocal);

	// dar uns espaços entre assuntos

	// usando aspas duplas
	obj = {
		foo: "bar",
		bar: "foo",
		foobar: "foobar"
	};
	for(campo in obj) {
		console.log(obj[campo]);
	};

	array = [
		1,
		2,
		3
	];
	console.log(array);

})();