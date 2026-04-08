const prompt = require('readline-sync');

let nome = prompt.question("Qual seu nome completo? ")

console.log(` Meu nome é ${nome} e a quantidade de caracteres são ${nome.length}`)