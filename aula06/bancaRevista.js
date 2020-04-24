const prompt = require ('prompt-sync')();

const nome = prompt ('Nome: ');
const valor = Number(prompt('Valor R$: '));
const pacote = Math.floor(valor/2);
const preco = pacote*2;
const troco = valor-preco;
const figurinha = pacote*5;

console.log (`Figurinhas para ${nome}
\n---------------------
\n ${pacote} pacotes, com total de ${figurinha} figurinhas
\n Troco R$: ${troco}`);