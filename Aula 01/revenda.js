var prompt =  require('prompt-sync')()

var carro =  prompt ('Carro: ')
var preco = prompt ('Preco R$: ')

var entrada = preco / 2
var parcela = entrada / 12

console.log('Promoção do Carro'+ carro)
console.log('-------------------------------------')
console.log('Entrada de R$: '+ entrada.toFixed(2))
console.log ('+12x de R$: '+ parcela.toFixed(2))



