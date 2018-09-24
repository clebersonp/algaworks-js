//while, do while, for, for in

var x = 0;

while(x < 10) {
	console.log("X é igual a " + x);
	x++;
}

var y = 0;

do {
	console.log("Y é igual a " + y);
	y++;
} while (y > 1);

for(var posicao = 0; posicao < 10; posicao++) {
	console.log("Posicao é igual a " + posicao);
}

var pessoa = {
	nome: "Cleberson",
	sobrenome: "Pedreira Pauluci"
}

// for in para iterar sobre as propriedades dos objetos
for (var property in pessoa) {
	console.log("A propriedade " + property + " é igual à " + pessoa[property]);
}