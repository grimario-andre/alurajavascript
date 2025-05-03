console.log(`Imagine que você que fazer uma lista de compras\n como faria com os conhecimentos de hoje`);
console.log(`Algo assim: `);

const arroz = 'arroz';
const feijao = 'feijão';
const acucar = 'açucar';

console.log(`${arroz} ${feijao} ${acucar}`);

console.log(`Fica complicado né, imagina uma lista com 50, 100 itens`);
console.log(`Por isso criamos uma lista fazendo da seguinte maneira`);

const listaDeCompras = new Array(
    'arroz',
    'feijão',
    'açucar'
);

console.log(`Lista de compras: ${listaDeCompras}`);

console.log('Legal, esse metodo chama-se array');
console.log('Mas se quiser adicionarmos mais items, como fazemos?');

console.log('Usamos uma função nativa do Js, push()');

listaDeCompras.push('manteiga', 'miojo');

console.log(`Lista de compras: ${listaDeCompras}`);
console.log(listaDeCompras);

console.log('Podemos adicionar listas dentro listas');

const materialDeLimpeza = [
    'Papel Higiênico',
    'Pasta de Dente',
    'Cotonete'
]

// listaDeCompras.push(materialDeLimpeza); Adiciono a lista materialDeLimpeza a lista listaDeCompras
listaDeCompras.push(...materialDeLimpeza); //Adiciono os itens da lista materialDeLimpeza a lista listaDeCompras

console.log(`Lista de compras atualizada: ${listaDeCompras}`);
console.log(listaDeCompras);

console.log('Se quisermos passar apenas o conteuno da lista materialDeLimpeza, como fazer?');
console.log('Usamos outra função nativa do Js o spred separador ...');

console.log('Agora como podemos remover um item da lista?');
console.log('Usamos a função splice(), ela espera dois valores, a possição do item na lista e quantidade a ser removida');

listaDeCompras.splice(1,1);
console.log('Assim removemos o feijão que esta na posiçao 1 e apenas um item da lista');

console.log(listaDeCompras);

console.log('Mas se quise exibir apenas um item da lista como fazer?');
console.log('Usamos o parte colchetes e indicamos a posição do item na lista');

console.log(listaDeCompras[3]);
console.log(listaDeCompras.toString());

console.log('Um suma existe uma variadade de formas para tratarmos uma lista, tudo vai depender da forma como você pretende usa-la');















