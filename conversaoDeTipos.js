console.log("Existem tipos de Dados");
console.log("Vamos conhecer dois, os tipos texto e inteiro(numeral)");


console.log("Podemos juntar os tipos?");
console.log("SIM!");
console.log("COMO?");
console.log("Usando o caractere +");
console.log("Podemos calcular textos e numeros com textos?");
console.log("Depende!");

console.log("Aqui temos os tipos texto e numero" + "Ano" + 2020);
console.log("Aqui temos o tipo texto " + "2" + "2");
console.log("Aqui temos o tipo inteiro 2 + 2 = " + (2 + 2));

console.log("Mas o caractere + também é usado como sinal de soma, então como podemos somar textos?");
console.log("Fazendo a conversão explicita");
console.log("Usamos uma função nativa do JS, parseInt()");

console.log("Soma de dois textos " + (parseInt("2") + parseInt("2")));
console.log("Mas por que conversão explicita?");
console.log("Porque não precisamos fazer com outra operaçõe");

console.log("Subtração 4 - 1 = " + ("4" - "1"));
console.log("Divisão 10 - 5 = " + ("10" / "5"));

console.log("Então vai dar certo se dividir Janeiro / 10 ?");
console.log("janeir / 10 = " + ("janeiro" / "10"));
console.log("Ele retornou NaN, que siginifica Not a Number, Não é um Número");

console.log("E para números com casas decimais?");
console.log("Temos o habito de declarmos com vírgula");
console.log("Vamos tentar");

console.log(7,5);
console.log("OPS! O que aconteceu?!");

console.log("Assim com outras linguagens de programação, elas usam o caractere ponto(.) para declarar números com casas decimais.");
console.log("Então o texto 7,5 deve ser declarado como: " + (7.5));
console.log("Podemos usar a conversão explicita novamente");
console.log("Então o texto " + "7.5" + " deve ser declarado usando o parseFloat(): " + (parseFloat("7.5")));
console.log("Então 7 / 3 deve ser calculado " + ("7" / "3"));





























