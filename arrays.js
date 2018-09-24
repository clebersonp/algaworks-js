// array
// Arrays no js não eh tipado, isso significa que posso adicionar qualquer tipo de dado no mesmo array

var valores = ["Cleberson", 16, function() {}];

console.log(valores);

var objetos = [
	["Cleberson", 33],
	["Bruna", 34]
];

console.log(objetos);
console.log(objetos[0]);

var objeto = {
	nome: "Cleberson",
	idade: 33
};

console.log(objeto["nome"]);
console.log(objeto.nome);