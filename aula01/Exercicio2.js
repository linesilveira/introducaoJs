var prompt = require ('prompt-sync')()

var dias = Number (prompt ('Viagem em dias: '))
var horas = Number (prompt ('Viagem em horas: '))
// var horas = parseInt (prompt ('Viagem em horas: '))
// var horas = parseFloat (prompt ('Viagem em horas: '))

var total = ((dias*24) + horas)

console.log ('Resultado da viagem em horas: '+ total)
