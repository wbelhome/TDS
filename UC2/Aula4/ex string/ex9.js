const prompt = require('readline-sync');

const frase = prompt.question("Digite uma frase: ")
const letra = prompt.question("Digite uma letra: ")

console.log(frase.toUpperCase())
console.log(frase.replaceAll(letra, "*"))
