const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
const PORT = 3000;

app.use(cors())

//ROTA PARA BUSCAR ENDEREÇO PELO CEP
app.get('/pokemon/:name', async (req, res) => {
    const pokemonName = req.params.name

    try {
        const url = (`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const response = await axios.get(url)
        const pokemon = response.data

        //FORMATAR OS DADOS PARA A RESPOSTA JSON
        const pokemonData = {
            name: pokemon.name,
            height: pokemon.height / 10, //CONVERSÃO PARA METROS
            weight: pokemon.weight / 10, //CONVERSÃO PARA KG
            abilities: pokemon.abilities.map((hab) => hab.ability.name).join(', '), 
            //PASSA A HABILIDADE - MAP(BUSCA AS HABILIDADES E PODE TER MAIS DE UMA AÇÃO)

            types: pokemon.types.map((type) => type.type.name).join(', '), 
            image: pokemon.sprites.front_default, ///URL DA IMAGME DO POKÉMON 
        }

        //RETORNA OS DADOS EM JSON
        res.json(pokemonData) 
        }

        catch(error) {
            res.status(500).json({error: 'Erro ao buscar dados do Pokémon'})
        }
    })

    //INICIA O SERVIDOR 
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http:/localhost:${PORT}`)
    })


