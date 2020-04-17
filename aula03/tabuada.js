const prompt = require('prompt-sync')();

const num = Number(prompt('Digite um número: '));

console.log(`Tabuada do ${num}`);

for (i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`)
}
