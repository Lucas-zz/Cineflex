import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import loading from "../assets/loading.svg";

export default function MovieSelection() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promise.then(response => {
            setFilmes(response.data);
        });
    }, [])

    if (filmes.length === 0) {
        return (
            <>
                <img src={loading} />
                <h1>Carregando...</h1>
            </>
        );
    }

    return (
        <main className="movie-selection-page">
            <div className="title-page">
                <span className="title">Selecione o filme</span>
            </div>
            <div className="content">
                {filmes.map(filme => (
                    <Link to={`/sections/${filme.id}`}>
                        <div className="container">
                            <img src={filme.posterURL} alt={filme.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
