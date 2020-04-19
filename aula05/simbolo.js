const prompt = require ('prompt-sync')();

const simbolo01 = prompt ('1º Simbolo: ');
const simbolo02 = prompt('2º Simbolo: ');
const numero = Number(prompt('Número: '));

for (let i=0; i<=numero; i++){
    if(i%2==0){
        console.log(simbolo01);
    }else{
        console.log(simbolo02);
    }
};