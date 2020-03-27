var prompt = require ('prompt-sync')()

var produto = prompt ('Produto: ')
var preco_produto = prompt ('Preço do Produto: ')

var desconto = Number (preco_produto *0.1)
var parcelado = Number (preco_produto/3)
var valor_a_vista = Number (preco_produto - desconto)

console.log('Opções de Pagamento: ')
console.log ('-------------------------------------------')
console.log ('Valor a vista: '+ valor_a_vista.toFixed(2))
console.log ('ou em 3x: '+ parcelado.toFixed(2))

//console.log('Opções de Pagamento: ')/n--------------------- /n ('Valor a vista: ' + valor_a_vista.toFixed(2))
// /n ('ou em 3x: '+ parcelado.toFixed (2))s
