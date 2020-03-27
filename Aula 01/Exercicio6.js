var prompt = require ("prompt-sync")()

var nome_aluno = prompt ('Nome do Aluno: ')
var nota1 = Number (prompt ('Nota 1: '))
var nota2 = Number (prompt ('Nota 2: '))
var media_notas = Number (((nota1+nota2)/2).toFixed(2))

console.log (nome_aluno + ' sua média é: '+ media_notas)

//criar condição

if (media_notas >=7){
    console.log('Parabéns' +nome_aluno+ ', você foi aprovado!'  )
}else{
    console.log('Ops...' + nome_aluno+ ', você foi reprovado!')
}