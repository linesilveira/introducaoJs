const prompt = require ("prompt-sync")();

const produto = prompt ('Produto: ');
const preco = Number(prompt('Preço R$: '));
const promocao = ((preco*2)+(preco/2)).toFixed(2);
const desconto = preco/2

console.log (`Promoção - ${produto} 
\n-----------------
\n Leve3 por apenas R$: ${promocao}
\n o 3º intem irá custar só R$: ${desconto}`);