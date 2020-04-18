const prompt = require ('prompt-sync')();

const titulo = prompt('Título do filme: ')
const duracao = Number(prompt('Duração total do filme (min): '))
const duracaoHoras = Math.floor(duracao/60)
const restoMin = duracao%60  

if (duracaoHoras !=0 && restoMin !=0){
    console.log(`A duração do filme ${ titulo } será: ${duracaoHoras }horas e ${restoMin }minutos`)
}else if(duracaoHoras==0){
    console.log (`A duração do fime ${ titulo } será de: ${restoMin }minutos`)
}else{
    console.log(`A duração do filme ${ titulo } será: ${duracaoHoras }horas`)
}


