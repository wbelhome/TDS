

function calcularRetangulo(altura, largura) {
    const area = altura * largura;
    return area;
}

const altura = Number(prompt.question('Digite a altura do retangulo: '));
const largura = Number(prompt.question('Digite a largura do retangulo: '));

const area = calcularRetangulo(altura, largura);
console.log(`A área do retângulo é: ${area}`);