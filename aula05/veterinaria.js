const prompt = require ('prompt-sync')();

const pesoRacao = Number(prompt('Peso da Ração (kg): '));
const consumoDiario = Number(prompt('Consumo diário (gr): '));

const duracao = Math.floor(pesoRacao*1000/consumoDiario)
console.log (`Duração: ${duracao} dias`)

const sobra = (pesoRacao*1000)%(duracao)

if(sobra==0){
    console.log ()
}else{
    console.log (`Haverá uma sobra de: ${sobra*100} gr`)
}