const prompt = require('prompt-sync')()

const medicamento = prompt('Medicamento: ')
const preco = Number(prompt('Preço do medicamento: '))
const pago = Number(prompt('Valor pago: '))

if (preco <= pago){

    if (Number.isInteger(preco)){

            const troco = Number ((pago-preco).toFixed(2)) 

            console.log(
            `O seu medicamento é ${medicamento} 
            \n Preço: ${preco} 
            \n o seu troco será: ${troco}`
            )

        }else{

            const doacao = Number(((Math.ceil(preco)) - preco).toFixed(2))
            const trocoDoacao = Number((pago-preco-doacao).toFixed(2))
            const troco = Number((pago-preco).toFixed(2))

            console.log(
            `O seu medicamento é ${medicamento}
            \n Preço: ${preco}
            \n você deseja doar: ${doacao}
            \n caso deseje doar o seu troco será: ${trocoDoacao} se não desejar doar seu troco será: ${troco}`
            )

        }
    } else {
        console.log ("Valor insuficiente para efetuar a compra")
    }