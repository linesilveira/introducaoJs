var prompt = require ('prompt-sync')()

var nome = prompt ('Nome: ')
var anoNascimento = prompt ('Ano de nascimento: ')
var idade = prompt ('Sua idade é: ')

if (anoNascimento <=2002){
    console.log('Olá ' +nome+ ' como sua idade é  '+idade+ ' você é maior de idade')
}else{
    console.log('Olá ' +nome+ ' como sua idade é  '+idade+ ' você é menor de idade')
}
    