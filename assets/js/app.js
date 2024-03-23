const pokeList = document.querySelector('#pokeList')

const fetchPokemon = async () => {
    try {
        const response = await fetch("pokeapi.json")
        const data = await response.json()
        renderPokemon(data.results)
    } catch (error) {
        console.log(error)
    }
}

const fetchPokemonDetails = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    renderPokemonDetails('???')
}

const renderPokemonDetails = pokemon => {
    // tarea pintar la información en #pokeDetails
    console.log(pokemon)
}

const renderPokemon = (pokemons) => {
    pokemons.forEach(poke => {

        const li = document.createElement('li')
        li.textContent = poke.name

        const button = document.createElement('button')
        button.textContent = 'details'

        // clausulas
        button.addEventListener('click', () => {
            fetchPokemonDetails(poke.name)
        })

        li.appendChild(button)
        pokeList.appendChild(li)

    })
}

fetchPokemon()
