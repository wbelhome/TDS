const prompt = require('readline-sync');

const alunos = []

function cadastrarAluno(nome, nota1, nota2, nota3){
    const aluno = []
    aluno.push(nome)
    aluno.push(nota1)
    aluno.push(nota2)
    aluno.push(nota3)
    alunos.push(aluno)
    console.log(`Aluno ${nome} cadastrado com sucesso!`)
}

function calcularMedia(buscaNome, alunos){
    for(let i = 0; i < alunos.length; i++){
        
    }
}

function verificarSituacao(){

}

function mostrarAlunos(buscaNome){
    const media = calcularMedia(buscaNome, alunos)
}

function main(){
    while(true){
        const resposta = Number(prompt.question(`
        Escolha uma opcao: \n
        1- Cadastrar aluno \n
        2- Mostrar alunos
        3- Sair \n`))
        if(resposta === 1){
            const nome = prompt.question("Digite o nome do aluno: ")
            const nota1 = Number(prompt.question("Digite a primeira nota: "))
            const nota2 = Number(prompt.question("Digite a segunda nota: "))
            const nota3 = Number(prompt.question("Digite a terceira nota: "))
            cadastrarAluno(nome, nota1, nota2, nota3)
        }
        else if(resposta === 2){
            const buscaNome = prompt.question("Digite o nome do aluno: ").toLowerCase();
            mostrarAlunos(buscaNome)
        }
        else if(resposta === 3){
            console.log("Até a próxima! ")
            break
        }
    }
}

main()