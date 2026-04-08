const prompt = require('readline-sync');

const num1 = Number(prompt.question("Digite um numero: "))
const num2 = Number(prompt.question("Digite um numero para somar: "))

let soma = num1 + num2

console.log(`A soma de ${num1} e ${num2} é ${soma}`)