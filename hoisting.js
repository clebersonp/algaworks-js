// Hoisting (elevação), o javascript coloca todas as declarações de variaveis e funções no topo do arquivo

console.log(x); 
// não dará erro, pois o js coloca a declaração da variavel x no topo.
//Porem sera undefined pois o js apenas eleva a declaração e não a atribuição;

var x = 5;

// neste ponto será impresso no console o valor da variavel x
console.log(x);