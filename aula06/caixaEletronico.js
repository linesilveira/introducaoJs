const prompt = require ('prompt-sync')();

const valor = Number(prompt('Valor R$: '));

if (valor%10 == 0) {
    console.log (`${valor} é multiplo de 10 e você irá receber ${valor/10} notas de R$ 10,00 `)

}else{
    return

}