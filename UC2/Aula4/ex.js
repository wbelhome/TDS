const prompt = require('readline-sync');

let nome = prompt.question(`Qual seu nome? `)
let cor = prompt.question(`Qual sua cor favorita? `)

console.log(`Meu nome é ${nome} e minha cor favorita é ${cor}`)