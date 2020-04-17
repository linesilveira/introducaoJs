var prompt = require ('prompt-sync')()

var pizza = Number (prompt ('valor da pizza: '))
var pessoas = Number (prompt ('quantidade de pessoas que comeram a pizza: '))

var total_pessoas= (pizza/pessoas)

console.log ('Valor total por pessoa: '+ total_pessoas.toFixed(2))
