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

function calcularMedia(media){
    for(let i = 0; i < alunos.length; i++){
        if(alunos[i][0] === media){
            const media = (alunos[i][1] + alunos[i][2] + alunos[i][3]) / 3
            return media
        }
    }
}

function verificarSituacao(situacao){
    if(situacao >= 7){
        return "Aprovado"
    }
    else if(situacao >= 5 && 5 < 7){
        return "Recuperação"
    }
    else{
        return "Reprovado"
    }
}

function mostrarAlunos(){
    if(alunos.length === 0){
        console.log("Não há alunos cadastrados")
    }
    else{
        alunos.forEach(aluno => {
            console.log(`
                    Aluno: ${aluno[0]} 
                    Notas: ${aluno[1]}, ${aluno[2]} e ${aluno[3]}
                    Média: ${calcularMedia(aluno[0])} 
                    Situação: ${verificarSituacao(calcularMedia(aluno[0]))} 
                    `)
        })
    }
}

function main(){
    while(true){
        const resposta = Number(prompt.question(`
        Escolha uma opcao: \n
        1- Cadastrar aluno \n
        2- Mostrar alunos
        3- Sair \n`))

        if(resposta === 1){
            const nome = prompt.question("Digite o nome do aluno: ").toLowerCase()
            const nota1 = Number(prompt.question("Digite a primeira nota: "))
            const nota2 = Number(prompt.question("Digite a segunda nota: "))
            const nota3 = Number(prompt.question("Digite a terceira nota: "))
            cadastrarAluno(nome, nota1, nota2, nota3)
        }
        else if(resposta === 2){
            mostrarAlunos();
        }
        else if(resposta === 3){
            console.log("Até a próxima! ");
            break
        }
    }
}

main()