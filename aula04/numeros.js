const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número: '));

for (let i=0; i<10; i++){
    num = num+1
    console.log (`Seus próximos números são: ${num}`)
};