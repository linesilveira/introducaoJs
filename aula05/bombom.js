const prompt = require ('prompt-sync')();

const precoBombom = Number(prompt('Preço do Bombom: '))
const quantidade = Number(prompt('Quantidade: '))

if(quantidade>10){
    console.log(`Valor a Pagar R$: ${precoBombom*(quantidade-1)} e  1 bombom é brinde.`)
}else{
    console.log(`Valor a Pagar R$: ${precoBombom*quantidade}`)
}