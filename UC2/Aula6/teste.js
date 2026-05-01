function criarUsuario(name, age, city, hobbies){
    return [name, age, city, hobbies];
}

function formatarHobbies(hobbies){
    return `${hobbies[0]}, ${hobbies[1]} e ${hobbies[2]}`
}

function gerarDescricao(usuario){
    console.log(`Olá, meu nome é ${usuario[0]}, tenho ${usuario[1]} anos, moro em ${usuario[2]} e meus hobbies são ${formatarHobbies(usuario[3])}`);
}

const usuarios = [];

function adicionarUsuarios(usuarios, usuario){
    usuarios.push(usuario);
    return usuarios;
}

function gerarRelatório(usuarios){
    const quantidadeUsuarios = usuarios.length;
    console.log(`Total de usuários: ${quantidadeUsuarios}`);
}

let user1 = criarUsuario("William", 27, "São Leopoldo", ["futebol", "natação", "correr"]);
let user2 = criarUsuario("Gabi", 23, "São Leopoldo", ["Acad", "Cross", "correr"]);
let user3 = criarUsuario("Erick", 20, "São Leopoldo", ["gostar do Will", "basquete", "valorant"]);

console.log(user1);

formatarHobbies(user1[3]);
console.log(formatarHobbies(user1[3]));

gerarDescricao(user1);
gerarDescricao(user2);
gerarDescricao(user3);

adicionarUsuarios(usuarios, user1);
adicionarUsuarios(usuarios, user2);
adicionarUsuarios(usuarios, user3);
console.log(usuarios);

gerarRelatório(usuarios);

