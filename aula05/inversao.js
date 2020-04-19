const prompt = require ('prompt-sync')();

let numero = Number(prompt('Número (centena): '));

if (numero>100){
    let digito
    let resultado = 0

    while(numero){
        digito = numero%10,
        resultado = (resultado *10) + digito;
        numero = numero/10|0  
    }

    console.log (resultado)
    
}else{
    console.log('Erro...Deve ser centena...')
}