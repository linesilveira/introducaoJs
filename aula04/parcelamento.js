const prompt = require ('prompt-sync')();

const produto = prompt('Produto: ');
const preco = Number(prompt('Preco: '));

console.log (`Opções de Pagamento para o ${produto}\n -----------------`)

for (let i=1; i<=10; i++){
    console.log(`${i} x ${(preco/i).toFixed(2)}`)
}