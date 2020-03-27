const prompt = require ('prompt-sync')()

const nomeProduto = prompt ('Produto: ')
const preco = prompt ('Preço: ')

if(preco <=100){
    console.log('Você deseja comprar um '+nomeProduto+ ' e seu preço é '+preco)
}else{
    const valorParcelado = Number(preco/3).toFixed(2)
    console.log('Você deseja comprar um  '+nomeProduto+' e seu preço a vista é '+preco+' ou você pode pagar em 3x de '+valorParcelado)
}