import React, { useEffect, useState } from 'react';

const PokemonApp = () => {
    const [pokemons, setPokemons] = useState([]);
    const [search, setSearch] = useState("");
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/pokemons');
                const data = await response.json();
                setPokemons(data);

                // Coletar tipos únicos para o filtro
                const allTypes = new Set();
                data.forEach(pokemon => {
                    pokemon.types.forEach(typeInfo => {
                        allTypes.add(typeInfo.type.name);
                    });
                });
                setTypes([...allTypes]);
            } catch (error) {
                console.error("Erro ao buscar Pokémon:", error);
            }
        };
        fetchPokemons();
    }, []);

    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedType === "" || pokemon.types.some(typeInfo => typeInfo.type.name === selectedType))
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-400 to-red-500 text-black p-4 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-center mb-6">Pokédex</h1>

            <input
                type="text"
                placeholder="Buscar Pokémon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-3 w-full max-w-lg mx-auto rounded-xl border border-red-300 bg-yellow-300 text-black placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
            />

            <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="mb-6 p-3 w-full max-w-lg mx-auto rounded-xl border border-red-300 bg-yellow-300 text-black focus:outline-none focus:ring-2 focus:ring-red-600"
            >
                <option value="">Todos os Tipos</option>
                {types.map(type => (
                    <option key={type} value={type} className="capitalize">
                        {type.toUpperCase()}
                    </option>
                ))}
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
                {filteredPokemons.map((pokemon) => (
                    <div 
                        key={pokemon.id} 
                        className="pokemon-card">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="pokemon-image"
                        />
                        <h2 className="pokemon-name">{pokemon.name}</h2>
                        <p className="text-center text-sm opacity-80">ID: {pokemon.id}</p>
                        <div className="pokemon-types">
                            {pokemon.types.map((typeInfo) => (
                                <span key={typeInfo.type.name} className="pokemon-type">
                                    {typeInfo.type.name.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonApp;
