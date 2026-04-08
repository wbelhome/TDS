const prompt = require('readline-sync');

const word1 = prompt.question("Digite uma palavra? ")
const word2 = prompt.question("Digite a segunda palavra? ")

const wordT = word1 + word2

console.log(wordT)
console.log(wordT.length)