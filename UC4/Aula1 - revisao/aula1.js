const prompt = require("readline-sync");   

// const nome = prompt.question("Qual e o seu nome? ");
// const idade = prompt.question("Qual e a sua idade? ");

// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

// const num1 = Number(prompt.question("Digite o primeiro numero: "));
// const num2 = Number(prompt.question("Digite o segundo numero: "));

// console.log(`A soma de ${num1} e ${num2} é: ${num1 + num2}`);
// console.log(`A subtração de ${num1} e ${num2} é: ${num1 - num2}`);
// console.log(`A multiplicação de ${num1} e ${num2} é: ${num1 * num2}`);
// console.log(`A divisão de ${num1} e ${num2} é: ${num1 / num2}`);    

// const nota = Number(prompt.question("Digite a nota do aluno: "));

// const resultado = nota >= 7 ? "Aprovado" : "Reprovado";

// console.log(`O aluno está: ${resultado}`);

// const numero = Number(prompt.question("Digite um numero: "));

// if (numero % 2 === 0) {
//     console.log(`O numero ${numero} é par.`);
// }   
// else {
//     console.log(`O numero ${numero} é impar.`);
//}

// const dia = Number(prompt.question("Digite o dia da semana (1-7): "));

// switch (dia) {
//     case 1:
//         console.log("Domingo");
//         break;  
//     case 2:
//         console.log("Segunda-feira");
//         break;
//     case 3:
//         console.log("Terça-feira");
//         break;  
//     case 4:
//         console.log("Quarta-feira");
//         break;
//     case 5:
//         console.log("Quinta-feira");
//         break;
//     case 6:
//         console.log("Sexta-feira"); 
//         break;
//     case 7:
//         console.log("Sábado");  
//         break;
//     default:
//         console.log("Dia inválido. Digite um número entre 1 e 7.");
//         break;
// }

// const num = Number(prompt.question(`Escolha o numero do seu prato principal:
//     1 - Lasanha
//     2 - Pizza
//     3 - Hamburguer
//     4 - Salada
//     `));

// switch (num) { 
//     case 1:
//         console.log("O valor do seu prato principal é: R$ 25,00");
//         break;
//     case 2:
//         console.log("O valor do seu prato principal é: R$ 20,00");
//         break;
//     case 3:
//         console.log("O valor do seu prato principal é: R$ 15,00");
//         break;
//     case 4:
//         console.log("O valor do seu prato principal é: R$ 10,00");
//         break;
//     default:
//         console.log("Opção inválida. Por favor, escolha um prato válido.");
//         break;
// }

// const numeros = [5, 10, 15, 20, 25];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//     soma += numeros[i];
// }
// console.log(`A soma de todos valores é: ${soma}`);

// let num = 1;

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

// for(let fruta of frutas) {
//     console.log(fruta);
// }

// const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Fruta ${i + 1}: ${frutas[i]}`);
// }

// const pessoa = {
//     nome: "João",
//     idade: 30
// }

// for(let chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`);
// }   

// let pares = [];

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         pares.push(i);
//     }
// }

// console.log(`Números pares de 0 a 20: ${pares.join(", ")}`);

// const num1 = Number(prompt.question("Digite o primeiro numero: "));
// const num2 = Number(prompt.question("Digite o segundo numero: "));

// console.log(`O maior numero entre ${num1} e ${num2} é: ${maior(num1, num2)}`);

// function maior(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


function somaPrimos(array) {
    let soma = 0;

    for (let numero of array) {

        if (numero < 2) {
            continue;
        }

        let primo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }

        if (primo) {
            soma += numero;
        }
    }

    return soma;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 11];

console.log(somaPrimos(num));

// function saudacao(){
//     const nome = prompt.question("Qual e o seu nome? ");
//     const idade = Number(prompt.question("Qual e a sua idade? "));
//     console.log(`Olá, ${nome}! Você tem ${idade} anos.`);   
// }

// saudacao()