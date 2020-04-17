const prompt = require ('prompt-sync')()

const nome = prompt ('Seu nome é: ')
const sexo = prompt ('Seu sexo é: ').toUpperCase() //para o texto ficar todo maiusculo
const altura = prompt ('Sua altura é: ')

if (sexo == 'FEMININO'){
    const pesoIdeal = Number (((62.1*altura)-44.7).toFixed(1)) 
    console.log ('olá' +nome+ ' seu peso ideal é '+pesoIdeal)

}else{
    const pesoIdeal = Number (((72.7*altura)-58).toFixed(1))
    console.log ('olá' +nome+ ' seu peso ideal é '+pesoIdeal)

}