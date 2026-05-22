
const movie = {
    name: "It",
    realeseYear: 2019,
    cast: ["Bill Skarsgård", "Finn Wolfhard", "Sophia Lillis"],
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

movie.personagens = ["Pennywise", "Richie", "Beverly"]
for(let i = 0; i < movie.cast.length; i++){
    console.log(`${movie.cast[i]} - ${movie.personagens[i]}`)    
}

movie.cast[0] = "Xuxa"

console.log(`
    ${movie.cast[0]} - ${movie.personagens[0]}
    ${movie.cast[1]} - ${movie.personagens[1]}
    ${movie.cast[2]} - ${movie.personagens[2]}
    `)