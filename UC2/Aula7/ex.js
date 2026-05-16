const prompt = require('readline-sync');

// let num1 = Number(prompt.question("Digite o primeiro numero: "));
// let num2 = Number(prompt.question("Digite o segundo numero: "));

// function compararNumeros(num1, num2){
//     if(num1 === num2){
//         console.log("Os números são iguais.");
//     }
//     else{
//         console.log("Os números são diferentes.");
//     }
// }

// compararNumeros(num1, num2);

// EX 2

// let num1 = Number(prompt.question("Digite o primeiro numero: "));
// let num2 = Number(prompt.question("Digite o segundo numero: "));

// function compararNumeros(num1, num2) {
//     let condition = num1 === num2
//     if (condition) {
//         console.log("Números são iguais");
//     }
//     else {
//         console.log("Números são diferentes");
//     }
// }

// EX 3

let num1 = Number(prompt.question("Digite o primeiro numero: "));
let num2 = Number(prompt.question("Digite o segundo numero: "));

function compararNumeros(num1, num2) {
    if(num1 > num2){
        console.log(`O número ${num1} é maior que o número ${num2}.`);
    }else if(num1 < num2){
        console.log(`O número ${num2} é maior que o número ${num1}.`);
    }
    else{ 
        console.log("Os números são iguais.");
    }
}

compararNumeros(num1, num2);