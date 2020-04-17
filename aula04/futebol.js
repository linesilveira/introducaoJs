const prompt = require('prompt-sync')();

const time01 = prompt ('Nome do Time 1: ')
const gol01 = Number(prompt('Quantos Gols o time 1 fez: '))

const time02 = prompt ('Nome do Time 2: ')
const gol02 = Number(prompt('Quantos gols o time 2 fez:'))

if (gol01==gol02){
    console.log (`O jogo entre o ${time01} e o ${time02} foi um empate de ${gol01}`)

}else{

    if(gol01>gol02){

        console.log(`No jogo o vencedor foi ${time01}`)
            
            if(gol01-gol02>=3){
            console.log('O jogo foi um Goleada! ')
            
            }else{
                console.log('O jogo foi equilibrado! ')
            };

    }else{

        console.log(`No jogo o vencedor foi ${time02}`)
            
            if(gol02-gol01>=3){
                console.log('O jogo foi um Goleada! ')
            
            }else{
                console.log('O jogo foi equilibrado! ')
                
            };

    };
  
};