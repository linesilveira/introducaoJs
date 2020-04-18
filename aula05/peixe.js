const prompt = require ('prompt-sync')();

const pessoas = Number(prompt('Número de Pessoas: '));
const peixes = Number(prompt('Número de Peixes: '));

if (pessoas==peixes){
    const valorPagar = (pessoas*10);
    console.log (`Valor Total a ser pago R$: ${valorPagar}`);
}else if(pessoas<peixes){ 
    const valorPeixe = ((peixes-pessoas)*5);
    const valorPagar = (valorPeixe+(pessoas*10));
    console.log(`Valor Total a ser pago R$: ${valorPagar}`)
}else{
    const valorPagar = (pessoas*10);
    console.log (`Valor Total a ser pago R$: ${valorPagar}`)
};