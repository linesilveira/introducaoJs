const prompt = require ('prompt-sync')();

const produto = prompt('Produto: ');
const quantidade = Number(prompt('Quantidade: '));
const preco = Number(prompt('Preço R$: '));

if (quantidade>=60){
    const notas = Math.ceil(quantidade/60);

    for(let i=1; i<=notas; i++){
        if (i==notas){
            const resto = quantidade%60

            if(resto==0){
            console.log(`Nota fiscal ${i}: ${produto} - 60 UN - ${preco.toFixed(2)} - ${preco *60}`)
            }else{
            console.log(`Nota fiscal ${i}: ${produto} - ${resto} UN - ${preco.toFixed(2)} - ${preco*resto}`)
            }

        }else{
            console.log(`Nota fiscal ${i}: ${produto} - 60 UN - ${preco.toFixed(2)} - ${preco *60}`)
        }

    }      
}else{
    const total = quantidade*preco
    console.log(`Nota fiscal: ${produto} - ${quantidade} UN - ${preco.toFixed(2)} - ${total}`)

};