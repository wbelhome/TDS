const prompt = require('readline-sync');
const usuarios = [];

function criarUsuario(usuario, senha){
    const user = [];
    user.push(usuario);
    user.push(senha);
    usuarios.push(user);
    console.log(`Usuario ${usuario} criado com sucesso!`);
}

function fazerLogin(usuarios){
    const usuario = prompt.question("Digite seu nome de usuario: ");
    const senha = prompt.question("Digite sua senha: ");

    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i][0] === usuario && usuarios[i][1] === senha){
            console.log(`Bem-vindo, ${usuario}! Login realizado com sucesso!`);
            return;
        }
    }
    console.log("Usuario ou senha incorretos.");
}

function main(){
    while (true) {
        const resposta = Number(prompt.question(`
        Escolha uma opcao: \n
        1. Criar usuario\n
        2. Fazer login\n
        3. Sair\n
        `));
        if(resposta === 1){
            const usuario = prompt.question("Digite seu nome de usuario: ");
            const senha = prompt.question("Digite sua senha: ");
            criarUsuario(usuario, senha);
        }
        else if(resposta === 2){
            fazerLogin(usuarios);
        }
        else if(resposta === 3){
            console.log("Ok, até a proxima!");
            break;
        }
        else{
            console.log("Resposta invalida, por favor digite '1', '2' ou '3'.")
        }   
    }
}

main()