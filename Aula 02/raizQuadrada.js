const prompt = require('prompt-sync')()

const numero = Number (prompt('Número: '))

const raizDoNumero = Math.sqrt(numero)

if(Number.isInteger(raizDoNumero)){

    console.log('A Raíz do seu número é:  '+raizDoNumero)
}else{

    console.log ('Este número não possui raíz exata! ')
}
