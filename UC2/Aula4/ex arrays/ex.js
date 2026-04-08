const prompt = require('readline-sync');

const raca = ["pitbull", "pinscher", "caramelo", "dalmata", "shitzu"]

const num = Number(prompt.question("Digite um número: "))

console.log(raca[num])