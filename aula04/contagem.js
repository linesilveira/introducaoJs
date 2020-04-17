const prompt = require ('prompt-sync')();

const contagem = Number(prompt('Número: '));

console.log ('Contagem Regressiva:  ');

for (i=contagem; i>0; i--){
    console.log(i)
}

console.log('Fogo!');