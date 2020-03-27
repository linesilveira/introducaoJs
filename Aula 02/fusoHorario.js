const prompt = require ('prompt-sync')()

const horaBr = Number(prompt('Horário no Brasil: '))

if (horaBr<=24){
    
    const horaFr = (horaBr+5)
    
        if (horaFr<=24){
        console.log('Horário na França é: '+horaFr)
        }else{
        
        const horaAjustada = (horaFr-24)
        console.log('Horário na França é: '+horaAjustada)
        };    
}else{
        
    console.log('Horário inválido, digite novamente!')
    
}; 

