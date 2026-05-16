const prompt = require('readline-sync');

function main(){
    const resp = Number(prompt.question(`Escolha uma opcao:    
        1 - Somar dois numero
        2 - Subtrair dois numero
        3 - Multiplicar dois numero
        4 - Dividir dois numero
        5 - Porcentagem de um numero
        `)); 

        switch (resp) {
            case 1:
                const num1 = Number(prompt.question("Digite o primeiro numero: "));
                const num2 = Number(prompt.question("Digite o segundo numero: "));
                soma(num1, num2);
                break;
            case 2:
                const num3 = Number(prompt.question("Digite o primeiro numero: "));
                const num4 = Number(prompt.question("Digite o segundo numero: "));
                subtracao(num3, num4);
                break;              
            case 3:
                const num5 = Number(prompt.question("Digite o primeiro numero: "));
                const num6 = Number(prompt.question("Digite o segundo numero: "));
                multiplicacao(num5, num6);
                break;      
            case 4:
                const num7 = Number(prompt.question("Digite o primeiro numero: "));
                const num8 = Number(prompt.question("Digite o segundo numero: "));
                divisao(num7, num8);
                break;
            case 5:
                const num9 = Number(prompt.question("Digite o numero: "));
                const num10 = Number(prompt.question("Digite quantos porcento deseja calcular: "));
                porcentagem(num9, num10);
                break;
        }
}

main()

function soma(num1, num2){
    const resultado = num1 + num2;
    console.log(`O resultado da soma e: ${resultado}`);
}

function subtracao(num1, num2){
    const resultado = num1 - num2;
    console.log(`O resultado da subtração e: ${resultado}`);
}
function multiplicacao(num1, num2){
    const resultado = num1 * num2;
    console.log(`O resultado da multiplicação e: ${resultado}`);
}    
function divisao(num1, num2){
    const resultado = num1 / num2;
    console.log(`O resultado da divisão e: ${resultado}`);
}
function porcentagem(num1, num2){
    const resultado = (num1 / num2) * 100;
    console.log(`O resultado da porcentagem e: ${resultado}%`);
}