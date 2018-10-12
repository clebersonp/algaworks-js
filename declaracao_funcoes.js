// por conta do hoisting, somente a variavel dizerOla que recebe a função será levada para o topo,
// mas nesse momento ela ainda não sera uma função, somente uma variavel
// dizerOla("Não compila");
// dizerTchau('Não compila');

// compila pois o hosting levara a função para o topo
dizerOi('Compila normalmente');


// Declaração Tradicional de função - Função eh como se fosse metodo no java
function dizerOi(nome) {
	console.log("Oi " + nome);
};

// chamar a funcao declarada
dizerOi("Cleberson");

// Expressão de função - Cria uma função anonima e atribui a uma variavel
var dizerOla = function (nome) {
	console.log("Olá " + nome);
};

// chamar a função
dizerOla("Bruna");

// declarando uma funcao pelo construtor da funcao
// o construtor recebe n parametros, o primeiro é o argumento,
// o segundo é a instrução que sera executada dentro da função
// maneira pouco utilizado e eh inseguro, mas se precisar executar
// um script passado como string no construtor de função tbm funciona
var dizerTchau = new Function("nome", "console.log('Tchau ' + nome);");

dizerTchau("John");

// Hoisting de declarações de funções

// função tradicional sera levada para o topo e conseguimos
// executa-la mesmo antes de declara-la

// função anonima e a a função pelo construtor de função somete a variavel
// que foi utilizada para a declaração da função será levada para o topo do arquivo.
// se tentarmos executar uma desses funções antes de sua declaração, receberemos um erro, pois
// as variáveis estarão como undefined ainda, igual ao hoisting de declaração de variaveis.