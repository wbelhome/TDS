const prompt = require('readline-sync')
// =========================================
/*


   █████████                                                   
  ███░░░░░███                                                  
 ░███    ░███  ████████  ████████   ██████   █████ ████  █████ 
 ░███████████ ░░███░░███░░███░░███ ░░░░░███ ░░███ ░███  ███░░  
 ░███░░░░░███  ░███ ░░░  ░███ ░░░   ███████  ░███ ░███ ░░█████ 
 ░███    ░███  ░███      ░███      ███░░███  ░███ ░███  ░░░░███
 █████   █████ █████     █████    ░░████████ ░░███████  ██████ 
░░░░░   ░░░░░ ░░░░░     ░░░░░      ░░░░░░░░   ░░░░░███ ░░░░░░  
                                              ███ ░███         
                                             ░░██████          
                                              ░░░░░░        
                                              
                                              
*/
// =========================================
// Instruções:
// - Leia cada enunciado com atenção
// - Implemente a solução logo abaixo de cada exercício
// - NÃO pule exercícios
// - Pesquise na internet métodos que você não conhece
// =========================================


// =========================================
// EXERCÍCIO 1
// Crie um array com pelo menos 6 filmes.
// Peça para o usuário digitar um número.
// Mostre o filme que está na posição informada.
// =========================================
// const films = ["it", "pixel", "carros", "moana", "frozen", "malevola"]

// const resp = prompt.question(`Digite um numero de 0 a ${films.length - 1}: `)

// console.log(`O filme escolhido foi ${films[resp]}`)



// =========================================
// EXERCÍCIO 2
// Crie um array com 8 tipos de bebidas.
// Mostre quantos elementos existem nele.
// =========================================

// const drinks = ["coca", "pepsi", "gin", "vodka", "sukita", "licor", "cerveja", "sprite"]
// console.log(drinks.length)


// =========================================
// EXERCÍCIO 3
// Crie um array com 5 Pokémons.
// Peça para o usuário digitar o nome de um Pokémon.
// Verifique se ele está no array.
// =========================================

// const pokemon = ["pikachu", "charizard", "bulbasaur", "squirtle", "mewtwo"];

// const resp = prompt.question(`Digite o nome de um pokemon: `).toLowerCase();

// console.log(pokemon.includes(resp))




// =========================================
// EXERCÍCIO 4
// Crie um array vazio.
// Peça ao usuário 3 nomes de jogos.
// Adicione ao array.
// Mostre o array final.
// =========================================

// const games = []
// const resp = prompt.question("Digite o nome de um jogo: ").toLocaleLowerCase();
// games.push(resp);
// const resp2 = prompt.question("Digite o nome de um jogo: ").toLocaleLowerCase();
// games.push(resp2);
// const resp3 = prompt.question("Digite o nome de um jogo: ").toLocaleLowerCase();
// games.push(resp3);
// console.log(games)




// =========================================
// EXERCÍCIO 5
// Crie um array com 5 séries.
// Remova a última série.
// Mostre o array atualizado.
// =========================================
// const series = ["tbbt", "dark", "hxh", "naruto", "the mentalist"]
// console.log(series)
// series.pop()
// console.log(series)


// =========================================
// EXERCÍCIO 6
// Crie um array com 6 comidas.
// Remova 2 comidas a partir de uma posição específica.
// Mostre o array resultante.
// =========================================
// const food = ["arroz", "feijão", "sushi", "xis", "carne de panela", "churrasco"]
// console.log(food)
// food.splice(1, 2)
// console.log(food)



// =========================================
// EXERCÍCIO 7
// Crie um array com nomes de bandas.
// Mostre todas as bandas no console,
// separadas por " - ".
// =========================================
// const bands = ["imagine dragons", "system of a down", "slipknot", "linkin park"]
// console.log(bands)
// console.log(bands.join(" - "))



// =========================================
// EXERCÍCIO 8
// Crie um array com preços de produtos.
// Mostre no console o primeiro e o último preço do array.
// =========================================

// const price = [18.40, 29.90, 99.90, 5.00, 999.00]
// console.log(price.at(0).toFixed(2))
// console.log(price.at(-1).toFixed(2))


// =========================================
// EXERCÍCIO 9
// Crie um array com nomes de personagens de jogos.
// Ordene os nomes em ordem alfabética.
// =========================================

// const characters = ["kratos", "boy", "lyon", "ashley"]

// console.log(characters.sort())


// =========================================
// EXERCÍCIO 10
// Crie um array com nomes de filmes repetidos.
// Mostre o tamanho do array.
// =========================================

// const films = ["carros", "pixel", "carros", "nemo"]

// console.log(films.length)

// =========================================
// EXERCÍCIO 11
// Crie dois arrays:
// - um com filmes
// - outro com séries
// Junte os dois em um único array.
// =========================================

// const films = ["carros", "pixel", "carros", "nemo"]
// const series = ["naruto", "dark", "tbbt", "mentalista"]

// const all = []
// all.push(films)
// all.push(series)
// console.log(all)

// =========================================
// EXERCÍCIO 12
// Crie um array com episódios de uma série.
// Inverta a ordem dos episódios.
// =========================================

//  const ep = [
//     "1 ep",
//     "2 ep",
//     "4 ep",
//     "3 ep"
//  ]

//  console.log(ep.sort().reverse())

// =========================================
// DESAFIO EXTRA (NÃO OBRIGATÓRIO)
// Crie um sistema simples de catálogo de filmes:
// - Use pelo menos 3 métodos diferentes (map, filter, reduce, find, etc.)
// - Exemplo de ideias:
//   * Filtrar filmes por gênero
//   * Encontrar um filme específico
//   * Calcular média de notas dos filmes
// =========================================

// const movies = [
//       {movie: "Cars", generos: "animation", nota: 10},
//       {movie: "Frozen 2", generos: "animation", nota: 11},
//       {movie: "Fight Club", generos: "action", nota: 6},
//       {movie: "Jumanji", generos: "adventure", nota: 10},
//       {movie: "Ghost Rider", generos: "hero", nota: 11}
// ]

// movies.forEach(movie => {
//    console.log(movie.movie)
// })

// const resp = ask.question("Digite o nome do filme que queira saber o genero: ")


