 const person = {
    name: "William",
    age: 27,
    genre: "Rock"
}

console.log(`O nome da pessoa é ${person.name}, ela tem ${person.age} anos e gosta muito de ${person.genre}`)

function newPerson(person){  
    const newPerson = {
        ...person,
        foods: ["arroz", "feijão"],
        bf: {
            nome: "Yuri",
            idade: 27
        }
    }
    console.log(`O nome da pessoa é ${newPerson.name} e suas comidas preferidas são ${newPerson.foods[0]}, ${newPerson.foods[1]}. Seu melhor amigo se chama ${newPerson.bf.nome} e tem ${newPerson.bf.idade}  `)
}

newPerson(person)