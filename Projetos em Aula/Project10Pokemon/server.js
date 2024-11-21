const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express()
const PORT = 3000

app.use(cors())

app.get("/pokemon/:name", async (req,res) => {
    const pokemonName = req.params.name;

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await axios.get(url);
        const pokemon = response.data;

        const pokemonData = {
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            types: pokemon.types.map((type) => type.type.name).join(", "),
            height: pokemon.height / 10,
            weight: pokemon.weight / 10,
            abilities : pokemon.abilities.map((ability) => ability.ability.name).join(", "),
        }

        res.json(pokemonData);

    } catch (error) {
        res.status(500).json({error: "ERRO AO BUSCAR POKEMON!!!"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})