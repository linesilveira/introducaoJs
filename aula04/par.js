const prompt = require ('prompt-sync')();

let num = Number(prompt('Digite um número: '));

for (let i=1; i<=num; i++ ) {
    
    if (i%2==0){
    console.log(`Pares entre 1 e ${num}: ${i} `)}
};
