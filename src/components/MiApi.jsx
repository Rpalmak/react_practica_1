import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardPokemon from './CardPokemon';

function MiApi() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            if (pokemon) {
                console.log("Haciendo solicitud a la API para:", pokemon); // Agrega este console.log
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                if (res.ok) {
                    console.log("Respuesta de la API:", res); // Agrega este console.log
                    const result = await res.json();
                    console.log("Resultado de la API:", result); // Agrega este console.log
                    setPokemonData(result);
                } else {
                    console.error("Error al cargar datos de la API. Código de estado:", res.status);
                    console.log("Mensaje de error:", await res.text());
                }
            }
        } catch (error) {
            console.error("Error al cargar datos de la API", error);
        }
    }, [pokemon]);

    useEffect(() => {
        fetchData();
    }, [pokemon]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;
        console.log("Nombre del Pokemon:", inputValue); // Agrega este console.log
        setPokemon(inputValue);
    }

    console.log("Datos del Pokemon:", pokemonData); // Agrega este console.log

    return (
        <>
            <Form onSubmit={handleSubmit} className='me-5 ms-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del Pokemon:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa el nombre de algún pokemon"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <CardPokemon
                name={pokemon}
                id={pokemonData ? pokemonData.id : null}
                height={pokemonData ? pokemonData.height : null}
                weight={pokemonData ? pokemonData.weight : null}
            />
        </>
    );
}

export default MiApi;
