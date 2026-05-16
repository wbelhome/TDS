const prompt = require('readline-sync');

let produtos = []

function cadastrarProduto(id, nome, precoVenda, precoFabricacao, quantidadeEstoque){
    const produto = []
    while(id <= produtos.length){
        id += 1
    }
    produto.push(id)
    produto.push(nome)
    produto.push(precoVenda)
    produto.push(precoFabricacao)
    produto.push(quantidadeEstoque)
    produtos.push(produto)
    console.log(`Produto ${nome} cadastrado com sucesso!`)
}

function buscarProdutoPorId(id, produtos){
    const produto = produtos.find(p => p[0] === id)
    if(produto){
        console.log(`Produto encontrado: ID: ${produto[0]}, Nome: ${produto[1]}, Preço de Venda: R$${produto[2]}, Preço de Fabricação: R$${produto[3]}, Quantidade em Estoque: ${produto[4]}`)
    }else{
        console.log("Produto não encontrado.")
    }
}

function buscarProdutoPorNome(nome, produtos){
    const produto = produtos.find(p => p[1].toLowerCase() === nome.toLowerCase())
    if(produto){
        console.log(`Produto encontrado: ID: ${produto[0]}, Nome: ${produto[1]}, Preço de Venda: R$${produto[2]}, Preço de Fabricação: R$${produto[3]}, Quantidade em Estoque: ${produto[4]}`)
    }else{
        console.log("Produto não encontrado.")
    }
}

function mostrarProdutos(){
    if(produtos.length === 0){
        console.log("Nenhum produto cadastrado.")
    }else{
        console.log("Lista de produtos:")
        produtos.forEach(produto => {
            console.log(`ID: ${produto[0]}, Nome: ${produto[1]}, Preço de Venda: R$${produto[2]}, Preço de Fabricação: R$${produto[3]}, Quantidade em Estoque: ${produto[4]}`)
        })
    }
}


function main(){
    while(true){
        const resposta = Number(prompt.question(`
        Escolha uma opcao: \n
        1- Cadastrar produto \n
        2- Buscar produto por ID\n
        3- Buscar produto por Nome \n
        4- Mostrar produtos
        5- Sair \n`))

        if(resposta === 1){
            const id = 0
            const nome = prompt.question("Digite o nome do produto: ");
            const preco = Number(prompt.question("Digite o preco: ")).toFixed(2); //to fixed é pra limitar as casa decimais 
            const precoFab = Number(prompt.question("Digite o preco de fabricacao: ")).toFixed(2);
            const quantidadeEstoque = Number(prompt.question("Digite a quantidade em estoque: "))

            cadastrarProduto(id, nome, preco, precoFab, quantidadeEstoque)
        }
        else if(resposta === 2){
            const buscaId = Number(prompt.question("Digite o ID do produto que deseja buscar: "))
            buscarProdutoPorId(buscaId, produtos)
        }
        else if(resposta === 3){
            const buscaNome = prompt.question("Digite o nome do produto que deseja buscar: ").toLowerCase()
            buscarProdutoPorNome(buscaNome, produtos)
        }
        else if(resposta === 4){
            mostrarProdutos()
        }
    }  
}

main()