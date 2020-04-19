const prompt = require ('prompt-sync')();

const numero = Number(prompt('Número: '))

if (numero>=5){
    for (i=5; i<=numero; i=i+5){
    console.log(i)
    }
      
}else{
    console.log ('Ops... Número deve ser maior ou igual a 5')
}
