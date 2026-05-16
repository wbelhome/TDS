const prompt = require('readline-sync');

let soma = 0;
let resp = null;

while (resp !== 0) {
    resp = Number(prompt.question('Digite um numero: '));
    soma = soma + resp;
}
console.log(`A soma dos numeros digitados é: ${soma}`)