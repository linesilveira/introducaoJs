const prompt = require ('prompt-sync')()
const numero = Number(prompt('Número: '))

if (numero%2 ==0){//para falar de resto usar o sinal do modulo que no caso é %
    const parSeguinte = Math.floor(numero+2) //para arrendodamento para baixo pois para cima usar o Math.ceil
    console.log('Seu próximo número par é '+parSeguinte)
}else{
    const parSeguinte = Math.floor(numero+1)
    console.log('Seu próximo número par é '+parSeguinte)
}