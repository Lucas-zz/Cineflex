import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import loading from "../../assets/loading.svg";

export default function MovieSelection() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promise.then(response => {
            setMovies(response.data);
        });
    }, [])

    if (movies.length === 0) {
        return (
            <div className="loading">
                <img src={loading} />
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <main className="movie-selection-page">
            <div className="title-page">
                <span className="title">Selecione o filme</span>
            </div>
            <div className="content">
                {movies.map(movie => (
                    <Link to={`/sessions/${movie.id}`}>
                        <div className="container">
                            <img src={movie.posterURL} alt={movie.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}
