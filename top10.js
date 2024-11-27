
async function fetchTop10Pokemon() {
    const pokemonListElement = document.getElementById('pokemonList')

    document.getElementById('loadingMessage').style.display = 'block'


    for (let i = 1; i <= 10; i++) {
        try {
            const response = await fetch(`http://localhost:3000/pokemon/${i}`)
            if (!response.ok) throw new Error('Erro ao buscar dados do Pokémon')

            const data = await response.json()
            const pokemonCard = document.createElement('div')
            pokemonCard.className = 'pokemon-card'

            const pokemonImage = document.createElement('img')
            pokemonImage.src = data.image
            pokemonImage.alt = `Imagem de ${data.name}`
            pokemonImage.className = 'pokemon-image'

            const pokemonName = document.createElement('h3')
            pokemonName.textContent = data.name

            const pokemonTypes = document.createElement('p')
            pokemonTypes.textContent = `Tipos: ${data.types}`

            pokemonCard.appendChild(pokemonImage)
            pokemonCard.appendChild(pokemonName)
            pokemonCard.appendChild(pokemonTypes)

            pokemonListElement.appendChild(pokemonCard)
        } catch (error) {
            console.error('Erro ao buscar dados do Pokémon:', error)
         }  

         finally {
        document.getElementById('loadingMessage').style.display = 'none'
         }                  
    }   
}

<<<<<<< HEAD
fetchTop10Pokemon()
=======
fetchTop10Pokemon()

>>>>>>> 5d02ecfa31a688d9a5a758d2fbdd2a8cd08c1b5b
