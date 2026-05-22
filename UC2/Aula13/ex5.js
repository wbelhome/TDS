//1º ex da competição
const prompt = require("readline-sync");

const produtos = []

function cadastrarProduto(id, nome, precoVenda, precoFab, quantidade){
    const produto = {}
    while(id <= produtos.length){
        id += 1
    }

    produto.id = id
    produto.nome = nome
    produto.precoVenda = precoVenda
    produto.precoFab = precoFab
    produto.quantidade = quantidade
    produtos.push(produto)

    console.log(`Produto ${nome} cadastrado com sucesso`)
    
    return produtos
}

function buscarPorId(id){
    const produto = produtos.find((produto) => {
        return produto.id === id
    })
    if(produto){
        console.log(`Produto encontrado: ID: ${produto.id}, Nome: ${produto.nome}, Preço de Venda: R$${produto.precoVenda}, Preço de Fabricação: R$${produto.precoFab}, Quantidade em Estoque: ${produto.quantidade}`)
    }else{
        console.log(`Produto com id ${id} não encontrado`)
    }
}

function buscaPorNome(nome){
    const produto = produtos.find((p) => {
        return p.nome === nome
    })
    if(produto){
        console.log(`Produto encontrado: ID: ${produto.id}, Nome: ${produto.nome}, Preço de Venda: R$${produto.precoVenda}, Preço de Fabricação: R$${produto.precoFab}, Quantidade em Estoque: ${produto.quantidade}`)
    }else{
        console.log(`Produto com nome ${nome} não encontrado`)
    }
}

function mostrarProdutos(){
    if(produtos.length === 0 ){
        console.log("Não há produtos cadastrados")
    }else{
        for(const produto of produtos) {
                console.log(`Produto encontrado: ID: ${produto.id}, Nome: ${produto.nome}, Preço de Venda: R$${produto.precoVenda}, Preço de Fabricação: R$${produto.precoFab}, Quantidade em Estoque: ${produto.quantidade}`)
            }
    }
}

function main(){
    while(true){
        const resp = Number(prompt.question(`
            Digite a opcao que deseja:
            1- Cadastrar produto
            2- Buscar produto por ID
            3- Buscar produto por Nome
            4- Monstrar produtos
            5- Sair
            `))

        
        switch (resp) {
            case 1:
                const id = 0
                const nome = prompt.question("Digite o nome do produto: ").toLowerCase()
                const precoVenda = Number(prompt.question("Digite o preco de venda: ")).toFixed(2)
                const precoFab = Number(prompt.question("Digite o preco de fabricacao: ")).toFixed(2)
                const quantidade = Number(prompt.question("Digite quantidade em estoque: "))

                cadastrarProduto(id, nome, precoVenda, precoFab, quantidade)
                break;
            
            case 2: 
                const buscaId = Number(prompt.question("Digite qual o id que deseja procurar: "))
                buscarPorId(buscaId, produtos)
                break;
            
            case 3: 
                const buscaNome = prompt.question("Digite qual o nome que deseja procurar: ").toLowerCase()
                buscaPorNome(buscaNome)
                break;
            
            case 4: 
                mostrarProdutos()
                break;
            
            case 5:
                console.log("Ok! Até a próxima")
                process.exit()
            break;

            default:
                console.log("Você não digitou nenhuma das opcoes.")
                break;
        }
    }
}


main();
