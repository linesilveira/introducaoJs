const prompt = require ('prompt-sync')();

const horaInicial = Number(prompt('Hora Inicial do jogo: '));
const horaFinal = Number(prompt('Hora Final do jogo: '));
const duracao = (horaFinal+24)-horaInicial

if (!(Number.isInteger(horaInicial,horaFinal))){
    return
}

let outroDia = false;

if(horaFinal<horaInicial){
    outroDia = true;
}else{
    console.log()
};

console.log(`Duracação: ${duracao} horas`)


