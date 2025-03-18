const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/pokemons', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
        const detailedData = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const res = await axios.get(pokemon.url);
                return res.data;
            })
        );
        res.json(detailedData);
    } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        res.status(500).json({ error: "Erro ao buscar Pokémon." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
