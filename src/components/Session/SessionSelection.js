import axios from "axios";
import Footer from "../Utils/Footer";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import loading from "../../assets/loading.svg";

export default function SessionSelection() {
    const [movie, setMovie] = useState([]);
    const { idMovie } = useParams();

    let { days } = movie;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);

        promise.then(response => {
            setMovie(response.data);
        });
    }, [idMovie]);

    if (movie.length === 0) {
        return (
            <div className="loading">
                <img src={loading} />
                <h1>Carregando...</h1>
            </div>
        );
    }

    return (
        <main className="time-selection-page">
            <div className="title-page">
                <span className="title">Selecione o horário</span>
            </div>
            <div className="content">
                <div className="container">
                    {days.map(session => (
                        <div className="date">
                            <h1>{session.weekday} - {session.date}</h1>

                            <div className="hours">
                                {session.showtimes.map(session =>
                                    <Link to={`/seats/${session.id}`}>
                                        <span className="hours-box">{session.name}</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer
                src={movie.posterURL}
                alt={movie.title}
                title={movie.title}
            />
        </main>
    );
}
