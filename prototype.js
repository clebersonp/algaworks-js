// prototype
// No javascript não tem implementacao completa de objetos
// prototype é como se fosse uma classe, definicao de um obj

function Pessoa(nome, idade, corDeCabelo) { // essa funcao eh como se fosse o construtor do obj
	this.nome = nome;
	this.idade = idade;
	this.corDeCabelo = corDeCabelo;

	this.sobrenome = "Stark";
};

var cleberson = new Pessoa("Cleberson", 33, "Preto");
var bruna = new Pessoa("Bruna", 34, "Castanho claro");

console.log(cleberson);
console.log(bruna);

// um prototype não eh estruturado, ou seja eu posso mudar suas propriedades.
Pessoa.prototype.toString = function () {
	console.log("Olá, eu sou " + this.nome);
};

cleberson.toString();
bruna.toString();

// eu posso alterar um propriedade de apenas um determinado obj

cleberson.whoAmI = function () {
	console.log("Who am I? Eu sou o " + this.nome + " " + this.sobrenome);
};

cleberson.whoAmI();
// bruna.whoAmI(); nao compila pois o objeto bruna não foi definido a funcao whoAmI

// o Prototype permite eu alterar as propriedades e comportamentos de outros objetos

String.prototype.apagar = function () {
	return "";
};

console.log("oi".apagar());