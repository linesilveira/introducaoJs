const prompt = require ('prompt-sync')();

const num1 = Number(prompt('Digite um número:  '));
const num2 = Number(prompt('Digite outro número:  '));

let maior;
let menor;

if(num1>num2){
    maior = num1
    menor = num2
}else{
    maior = num2
    menor = num1
}

for(let i=menor; i<maior; i++){
    console.log (`Entre os ${menor} e o ${maior}: ${i}`)
}
