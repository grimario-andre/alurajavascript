console.log("trabalhando com atribuição de variáveis");

console.log("Existem algumas palavras chaves que devemos usar ao declarar uma variável, são elas: const e let");

console.log("A const possui justumente o que seu nome propoem, uma constante,\n é não faz sentido uma variavel ser constante.");
console.log("Então o valor que inserir nela não será mais alterado");

const idade = 29;
//Vai dar erro
// idade = 30;

console.log("Então o que devemos fazer? Usamos a outra palavra chave, let");
console.log("Esta sim é uma variável de fato, podemos reatribuir um valor, independente do tipo de dado");

let nome = "José";
// nome = 50;

console.log("Existe uma forma de misturar variaveis com o texto");

console.log("podemos declarar concatenando usando o caractere + " + nome);
console.log("Ou usando o template string");

console.log(`É o caractere crase e junto a um cifrão e um par de chaves ${nome} ${idade}`);





