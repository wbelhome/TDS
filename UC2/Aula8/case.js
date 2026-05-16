function pokemons(pokemon) {
    switch (pokemon) {
        case 'Bulbasaur':
            console.log("Bulbasaur é um Pokémon do tipo Planta/Venenoso.");
            break;
        case 'Charmander':
            console.log("Charmander é um Pokémon do tipo Fogo.");
            break;      
        case 'Squirtle':
            console.log("Squirtle é um Pokémon do tipo Água.");
            break;
        default:
            console.log("Pokémon desconhecido.");
    }
}

pokemons('Bulbasaur');
pokemons('Charmander');
pokemons('Squirtle');
pokemons('Pikachu');    