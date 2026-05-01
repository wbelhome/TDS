function criarUsuario(nome, idade, cidade, hobbies){
    const user = [];
    user.push(nome);
    user.push(idade);
    user.push(cidade);
    const usuario = [...user, hobbies]
    console.log(usuario);
}

function formatarHobbies(hobbies){
    console.log(`${hobbies[0]}, ${hobbies[1]} e ${hobbies[2]}`);
}

function gerarDescricao(usuario){
    console.log(`Olá, meu nome é ${usuario[0]}, tenho ${usuario[1]} anos, moro em ${usuario[2]} e meus hobbies são ${formatarHobbies(usuario[3])}`);
}
const usuarios = [];

function adicionarUsuarios(usuarios, usuario){
    usuarios.push(usuario);
    console.log(usuarios);
}

function gerarRelatório(usuarios){
    const quantidadeUsuarios = usuarios.length;
    console.log(`Quantidade de usuários: ${quantidadeUsuarios}`);
}

criarUsuario("William", 27, "São Leopoldo", ["futebol", "natação", "correr"]);

console.log("--------------------------------------------------");

formatarHobbies(["futebol", "natação", "correr"]);

console.log("--------------------------------------------------");

gerarDescricao(["William", 27, "São Leopoldo", ["futebol", "natação", "correr"]]);

console.log("--------------------------------------------------");

adicionarUsuarios(usuarios, ["William", 27, "São Leopoldo", ["futebol", "natação", "correr"]]);

console.log("--------------------------------------------------");

adicionarUsuarios(usuarios, ["Gabi", 23, "São Leopoldo", ["Acad", "Cross", "correr"]]);

console.log("--------------------------------------------------");

gerarRelatório(usuarios);