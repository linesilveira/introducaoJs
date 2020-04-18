const prompt = require ('prompt-sync')();

const valorHora = Number(prompt('Valor de hora R$: '));
const tempo = Number(prompt('Tempo usado em minutos: '));

const pago = Math.ceil(tempo/60);

console.log (`Pagar R$: ${(pago*valorHora).toFixed(2)}`);