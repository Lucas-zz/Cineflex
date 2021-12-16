
import axios from "axios";
import { useEffect, useState } from "react";

import loading from "../assets/loading.svg";
import image1 from "../assets/image 3.png";
import image2 from "../assets/image 6.png";

export default function MovieSelection() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

        promisse.then(response => {
            setFilmes(response.data);
        });

    }, [])

    console.log(filmes);
    console.log(typeof (filmes));

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
                    <div className="container">
                        <img src={filme.posterURL} alt={filme.title} />
                    </div>
                ))}
            </div>
        </main>
    )
}
