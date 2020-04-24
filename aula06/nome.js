const prompt = require ('prompt-sync')();

const nome = prompt ('Nome: ');
const numeroPonto = Number(prompt ('Pontos: '))

let totalPonto= ''
for (let i=0; i<numeroPonto; i++){
    totalPonto= totalPonto+'.'
}

console.log (totalPonto,nome,totalPonto);