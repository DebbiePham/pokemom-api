import React, { useState } from 'react';


const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
            .then(response => {
                // not the actual JSON response body but the entire HTTP response
                return response.json();
            }).then(response => {
                // we now run another promise to parse the HTTP response into usable JSON
                console.log(response);
                setPokemonList(response.results);
            }).catch(err => {
                console.log(err);
            });
    };

    return (
        
        <div>
            <div class="card shadow  align-items-center">
                <div class="card-body">
                    <div>
                        <button className='btn btn-success mb-5' onClick={fetchPokemon}>Fetch Pokemon</button>
                    </div>
                    {
                        pokemonList.map((pokemon, index) => {
                            return <div key={index} className='d-inline-grid'>
                                <ul>
                                    <li>{pokemon.name}</li>
                                </ul>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokemon; 