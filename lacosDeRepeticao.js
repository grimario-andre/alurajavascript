console.log('Laços de Repetição');
console.log('Em algumas situações do contidiano somos obrigados a fazer escolhas');

let mediaNotas = 8;
let comportamento = 'exemplar';
let contador = 0;
const destino = 'Fernando de Noronha';

const listaDestinos = [
    'Boa Vista',
    'Fernando de Noronha',
    'Angra dos Reis',
    'Camburiu'
];

console.log(`Então vamos assumir que Joãozinho teve uma média ${mediaNotas} e seu comportamento foi ${comportamento}`);

while (contador < 3) {
    console.log(contador);
    
    if (listaDestinos[contador] == destino) {
        console.log('Destino Encontrado');
        break;
    };

    contador += 1;
}




