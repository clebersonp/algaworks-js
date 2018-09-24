// definicao de objetos
// Um objeto é igual em java, tem propriedades e metodos
// o javascript trata um objeto com {} - no formato json, chave: valor separado por ,

var obj = {
	nome: "Cleberson",
	sobrenome: "Pedreira Pauluci",
	idade: 33,
	toString: function() {
		console.log("Olá, eu sou o " 
			+ this.nome + " " 
			+ this.sobrenome
			+" e tenho " + this.idade + " anos.");
	},
	whoAmI: showMe
};

function showMe() { // criando uma funcao para ser usada como metodo do obj
	console.log("Olá, eu sou o " 
			+ this.nome + " " 
			+ this.sobrenome
			+" e tenho " + this.idade + " anos.");
};

console.log(obj);

obj.toString(); // essa função eh chamada de metodo.

obj.whoAmI();

