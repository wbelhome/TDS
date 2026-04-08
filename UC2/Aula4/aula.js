const prompt = require('readline-sync');

let nome = prompt.question("Qual seu nome? ")

if(nome != "William"){
    console.log(`Olá fraco`)
}else{
    console.log(`Olá ${nome}, o pica`)
}
