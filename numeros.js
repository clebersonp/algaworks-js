// numeros reduzidos com exponencial;
var x = 4.56e7; // 45600000
var y = 1.23e-4; // 0.000123

var z = 9999999999999999; // overflow, pois o maximo são 15 digitos

var a = 0XFFF; // hexadecimal

var b = 07777; // octal

var c = 0b111111111111;

console.log(x);
console.log(x.toExponential());

console.log(y);
console.log(y.toExponential());

console.log(z);

console.log(a);
console.log(a.toString(16));// base hexa

console.log(b);
console.log(b.toString(8)); // base octal

console.log(c);
console.log(c.toString(2)); // base binaria

console.log((3.357).toFixed(2)); // fixa somente as cadas decimais
console.log((3.357).toPrecision(2)); // fixa o total de digitos
