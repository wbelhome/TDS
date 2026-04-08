const prompt = require('readline-sync');

const frase = prompt.question("Digite uma frase: ")
const word = prompt.question("Qual palavra quer substituir? ")
const otherW = prompt.question("Digite uma palavra para substituir: ")

console.log(frase.replaceAll(word, otherW))
