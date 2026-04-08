const prompt = require('readline-sync');

const frutas = "banana, uva, melancia"

const resp = prompt.question("Digite uma fruta: ")

console.log(frutas.includes(resp))