import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import loading from "../assets/loading.svg";

export default function SectionSelection() {
    const [filme, setFilme] = useState([]);
    const { idMovie } = useParams();

    let { days } = filme;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);

        promise.then(response => {
            setFilme(response.data);
        });
    }, []);

    if (filme.length === 0) {
        return (
            <>
                <img src={loading} />
                <h1>Carregando...</h1>
            </>
        );
    }

    return (
        <main className="time-selection-page">
            <div className="title-page">
                <span className="title">Selecione o horário</span>
            </div>
            <div className="content">
                <div className="container">
                    {days.map((filme) => (
                        <div className="date">
                            <h1>{filme.weekday} - {filme.date}</h1>

                            <div className="hours">
                                {filme.showtimes.map(section =>
                                    <Link to={`/seats/${section.id}`}>
                                        <span className="hours-box">{section.name}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="choosenMovie">
                <div className="container">
                    <img src={filme.posterURL} alt="cartaz-2" />
                </div>
                <div className="choosenMovieData">
                    <span className="choosenMovieName">
                        {filme.title}
                    </span>
                </div>
            </div>
        </main>
    );
}
