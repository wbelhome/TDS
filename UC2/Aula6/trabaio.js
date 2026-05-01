const prompt = require('readline-sync');
const usuarios = [];
function main(){
    while(true){
        const resposta = prompt.question(`
        Escolha uma opcao: \n
        1. Criar usuario\n
        2. Ver relatorio\n
        3. Descrever usuario\n
        4. Sair\n
        `).toLowerCase();
        if(resposta === '1'){
        const name = prompt.question("Digite seu nome: ");
        const age = prompt.question("Digite sua idade: ");
        const city = prompt.question("Digite sua cidade: ");
        const hobbie = prompt.question("Digite seus hobbie: ")
        const hobbie2 = prompt.question("Digite seus hobbie: ")
        const hobbie3 = prompt.question("Digite seus hobbie: ")
        
        makeUser(name, age, city, hobbie, hobbie2, hobbie3 );
        
        }else if(resposta === '2'){
            console.log(relatorio(usuarios));
        }else if(resposta === '3'){
            const i = prompt.question("Digite o indice do usuario que deseja descrever: ");
            if(i >= 0 && i < usuarios.length){
                console.log(description(usuarios[i]));
            }else{
                console.log("indice invalido.");
            }
        }else if(resposta === '4'){
            console.log("Ok, até a proxima!");
            break;
        }else{
            console.log("Resposta invalida, por favor digite '1', '2', '3' ou '4'.");
    }
    }
}
main()


function makeUser(name, age, city, hobbie, hobbie2, hobbie3){
    const user = [];
    user.push(name);
    user.push(age);
    user.push(city);
    const hobbies = [];
    hobbies.push(hobbie);
    hobbies.push(hobbie2);
    hobbies.push(hobbie3);
    const usuario = [...user, hobbies]
    formatarHobbies(usuario);
    addUser(usuarios, usuario);
}

function formatarHobbies(usuario){
    const [name, age, city, hobbies] = usuario;
    const hobbieFormatado =  `${hobbies[0]}, ${hobbies[1]} e ${hobbies[2]}`;
    return hobbieFormatado;
}

function description(usuario){
    const [name, age, city] = usuario;
    const hobbieFormatado = formatarHobbies(usuario);
    return `Olá, meu nome é ${name}, tenho ${age} anos, moro em ${city} e meus hobbies são ${hobbieFormatado}`
}


function addUser(usuarios, usuario){
    usuarios.push(usuario);
    console.log(usuarios);
}

function relatorio(usuarios){
    const quantidadeUsuarios = usuarios.length;
    console.log(`Quantidade de usuários: ${quantidadeUsuarios}`);
}


