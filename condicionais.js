// condicional if else

var idade = 13;
var resultadoIf;

if (idade <= 14) {
	resultadoIf = "criança";
} else if (idade >= 15 && idade < 18) {
	resultadoIf = "adolescente";
} else {
	resultadoIf = "adulto";
}

console.log("resultadoIf: " + resultadoIf + "\n");

// condicionais com switch
var resultadoSwitch;
switch(idade) {
	case 13:
		resultadoSwitch = "Treze";
	break;
	case 18:
		resultadoSwitch = "Dezoito";
		break;
	case 19:
		resultadoSwitch = "Dezenove";
		break;
	default:
		resultadoSwitch = "Não definido";
}

console.log("resultadoSwitch: " + resultadoSwitch);