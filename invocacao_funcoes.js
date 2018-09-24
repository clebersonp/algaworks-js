// maneira de chamar uma função
// tradicional, com a função call, com a função apply

// imprimir o objeto de scopo
console.log(this);

function dizerOi(nome) {
	console.log("Oi " + nome);
};

// tradicional
dizerOi("Cleberson");

// com call, objeto scopo e o argumento da funcao
dizerOi.call({}, "Bruna");
// dizerOi.call(null, "Bruna"); para usar o objeto de scopo global

// com apply, objeto scopo e o argumento da função dentro do array
dizerOi.apply({}, ["John"]);
// dizerOi.apply(null, ["John"]); para usar o objeto de scopo global