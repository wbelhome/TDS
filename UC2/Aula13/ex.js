// const filme = {
//     nome: "It",
//     lancamento: 2019,
//     elenco: ["Bill Skarsgård", "Finn Wolfhard", "Jaeden Martell"],
//     visto: true,
//     description: function (visto) {
//         if (resposta === true) {
//             return "Já vi"
//         }
//         else {
//             return "Não vi"
//         }
//     }
// }


const movie = {
    name: "It",
    realeseYear: 2019,
    cast: ["Bill Skarsgård", "Finn Wolfhard", "Jaeden Martell"],
    watched: true,
    description: function (){
        console.log(`
Title: ${this.name}
Release year: ${this.realeseYear}
Cast:`)
            
            for(let actor of this.cast){
                console.log(`- ${actor}`)
            }

            if(this.watched){
                return "Visto: Sim"
            }
            else{
                return "Visto: Não"
            }
    }

}


console.log(movie.name)
console.log(movie.realeseYear)
console.log(movie.cast)
console.log(movie.description())