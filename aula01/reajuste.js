var prompt = require ('prompt-sync')()

var nome = prompt('Nome de Funcionário')
var salario = prompt ('Salario R$:')

var novo_salario = salario * 1.10

console.log('Novo Salário R$: ' + novo_salario)
