const pokeList = document.querySelector('#pokeList')
const pokeType = document.querySelector('#pokeType')
const pokeModal = new bootstrap.Modal(document.getElementById('pokeModal'));

pokeType.addEventListener('change', e => {
    fetchPokemon(e.target.value)
})

const fetchPokemon = async (pokeType) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${pokeType}?limit=2`)
        const data = await response.json()
        console.log(data.pokemon)
        renderPokemon(data.pokemon)
    } catch (error) {
        console.log(error)
    }
}

const fetchPokemonDetails = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    renderPokemonDetails(data)
}

const renderPokemonDetails = poke => {
    pokeDetails.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = poke.name;

    const img = document.createElement("img");
    img.src = poke.sprites.front_default;
    img.alt = `image-${poke.name}`;

    const p = document.createElement("p");
    p.textContent = `Height: ${poke.height} Weight: ${poke.weight}`;

    pokeDetails.append(h2, img, p);

    pokeModal.show()
}

const renderPokemon = (pokemons) => {
    pokeList.innerHTML = ""
    pokemons.forEach(poke => {

        const li = document.createElement('li')
        li.textContent = poke.pokemon.name
        li.className = 'list-group-item'

        const button = document.createElement('button')
        button.textContent = 'details'
        button.className = 'btn btn-primary d-block'

        // clausulas
        button.addEventListener('click', () => {
            fetchPokemonDetails(poke.pokemon.name)
        })

        li.appendChild(button)
        pokeList.appendChild(li)

    })
}
