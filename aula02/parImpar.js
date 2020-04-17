var prompt = require('prompt-sync')()

var numero = Number(prompt)

if (numero % 2 == 0) {
    console.log(numero + ' é par') //ou pode ser escrito como ${numero} é par
} else {
    console.log(numero + 'é impar') // ou podemos escrever como ${numero} é impar
}