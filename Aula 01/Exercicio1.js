var prompt = require ('prompt-sync')()

var num = Number(prompt ('Número: '))

var antecessor = num-1
// var antecessor = num--
var sucessor = num+1
// var sucessor = num++

console.log ('Resultado de seus vizinhos: '+ antecessor + ' e ' +sucessor)
// console.log(`Resultado de seus vizinhos' ${antecessor} e ${sucessor}`)
