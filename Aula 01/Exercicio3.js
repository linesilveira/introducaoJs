var prompt = require ('prompt-sync')

var conta_total = Number (prompt ('Valor da Conta: '))
var clientes = Number (prompt('Clientes: '))

console.log ('Valor total por pessoa: ' + conta_total/clientes.toFixed(2))

