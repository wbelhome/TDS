const ask = require(`readline-sync`);

// PARTE 1

function criarusuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies]
}



// PARTE 2



function formatarHobbies(hobbies) {
    let hobbiesString = hobbies.join(", ")
    return hobbiesString;
}




//PARTE 3

function gerarDescricao(usuario) {
    return (`${usuario[0]}, tem ${usuario[1]} anos, mora em ${usuario[2]}, e gosta de: ${usuario[3]}, ${usuario[4]} e ${usuario[5]}`)
}



// PARTE 4

function adicionarUsuario(usuarios, usuario) {
    usuarios.push(usuario)
    usuarios.push(usuario2)
    return usuarios
}


function gerarRelatorio(usuarios) {
    return usuarios.length
}


//---------------------------------------------------

// PARTE 1

let nome = ask.question("Digite o seu nome: ");
let idade = Number(ask.question("Digite a sua idade: "))
let cidade = ask.question("Digite o nome de sua cidade: ")
let hobby1 = ask.question("Digite um hobby: ")
let hobby2 = ask.question("Digite mais um hobby: ")
let hobby3 = ask.question("Digite o ultimo hobby: ")
let hobbies = []
hobbies.push(hobby1);
hobbies.push(hobby2);
hobbies.push(hobby3);

console.log(criarusuario(nome, idade, cidade, hobbies));

let nome2 = ask.question("Digite o seu nome: ");
let idade2 = Number(ask.question("Digite a sua idade: "))
let cidade2 = ask.question("Digite o nome de sua cidade: ")
let hobby01 = ask.question("Digite um hobby: ")
let hobby02 = ask.question("Digite mais um hobby: ")
let hobby03 = ask.question("Digite o ultimo hobby: ")

const usuario2 = []

usuario2.push(nome2)
usuario2.push(idade2)
usuario2.push(cidade2)
usuario2.push(hobby01)
usuario2.push(hobby02)
usuario2.push(hobby03)

// PARTE 2

hobbies = []
hobbies.push(hobby1);
hobbies.push(hobby2);
hobbies.push(hobby3);

console.log(formatarHobbies(hobbies));

// PARTE 3

let usuario = []
usuario.push(nome)
usuario.push(idade)
usuario.push(cidade)
usuario.push(hobby1)
usuario.push(hobby2)
usuario.push(hobby3)

console.log(gerarDescricao(usuario));

// PARTE 4

const usuarios = []

console.log(adicionarUsuario(usuarios, usuario))


console.log(`Total de usuários: `, gerarRelatorio(usuarios))