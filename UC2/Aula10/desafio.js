const prompt = require('readline-sync');

function classificarMana(mana){

}

function mostrarCristal(nome, mana){

}

function somarMana(a, b, c, d){

}

function mediaMana(total){

}

function statusTorre(media){

}

function existeCristalMorto(){

}

function addCristal(nome, mana){
    cristais.push(nome);
    manaCristais.push(mana);

    return "Cristal adicionado com sucesso!";
}

let cristais = [];
let manaCristais = [];

function main(){
    const resp = Number(prompt.question(`Escolha uma opcao:
        1 - Adicionar 4 cristais\n   
        2 - Classificar mana\n
        3 - Mostrar cristal\n
        4 - Somar mana\n
        5 - Media de mana\n
        6 - Status da torre\n
        7 - Verificar se existe cristal morto\n
    `));

    switch (resp) {
        case 1:
            const nome = prompt.question("Digite o nome do cristal: ");
            const mana = Number(prompt.question("Digite a mana do cristal entre 1 e 100: "));
            console.log(addCristal(nome, mana));
            break;
    }        
}

main()  