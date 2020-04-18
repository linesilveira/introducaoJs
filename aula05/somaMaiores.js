const prompt = require ('prompt-sync')();

const numero01 = Number(prompt ('1º Número: '));
const numero02 = Number(prompt ('2º Número: '));
const numero03 = Number(prompt ('3º Número: '));

let soma;

if (numero01>numero02 && numero01>numero03){
    if(numero02>numero03){
        soma = numero01+numero02
        console.log(`A soma dos 2 maiores é: ${soma}`)
    }else{
        soma = numero01+numero03
        console.log(`A soma dos 2 maiores é: ${soma}`)
    }
}else if(numero01<numero02 && numero02>numero03){
    if(numero01>numero03){
        soma = numero02+numero01
        console.log(`A soma dos 2 maiores é: ${soma}`)
    }else{
        soma = numero02+numero03
        console.log(`A soma dos 2 maiores é: ${soma}`)
    }
}else{
    if(numero01>numero02){
        soma = numero03+numero01
        console.log(`A soma dos 2 maiores é: ${soma}`)
    }else{
        soma = numero03+numero02
        console.log(`A soma dos 2 maiores é: ${soma}`)

    }

};
