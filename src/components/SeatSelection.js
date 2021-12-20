import axios from "axios";
import Footer from "./Footer";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import loading from "../assets/loading.svg";

export default function SeatSelection({ filme, setFilme, username, setUsername, setTitle, cpf, setCpf, date, setDate, time, setTime }) {

    const { idSection } = useParams();
    const { movie, day, name } = filme;

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSection}/seats`);

        promise.then(response => {
            setFilme(response.data);
        })
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
        <main className="seat-selection-page">
            <div className="title-page">
                <span className="title">Selecione o(s) assento(s)</span>
            </div>
            <div className="seats">
                <div className="seats-to-choose">
                    {filme.seats.map(seat => (
                        (seat.isAvailable === true
                            ? <div className="circle">{seat.name}</div>
                            : <div className="circle unavailable">{seat.name}</div>
                        )
                    ))}

                </div>
                <div className="seat-subtitle">
                    <div className="selected">
                        <div className="circle selected"></div>
                        Selecionado
                    </div>
                    <div className="available">
                        <div className="circle"></div>
                        Disponível
                    </div>
                    <div className="unavailable">
                        <div className="circle unavailable"></div>
                        Indisponível
                    </div>

                </div>
            </div>

            <div className="buyer-info">
                <div className="buyer-name">
                    <span className="name">
                        Nome do comprador:
                    </span>
                    <input type="text" className="input-name" placeholder='Digite seu nome...' onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>
                <div className="buyer-cpf">
                    <span className="cpf">
                        CPF do comprador:
                    </span>
                    <input type="text" name="ao_cpf" className="input-cpf" placeholder='Digite seu CPF...' onChange={(e) => setCpf(e.target.value)} value={cpf} />
                </div>
            </div>
            <Link to="/receipt">
                <div className="reservation-button">
                    <button>Reservar assento(s)</button>
                </div>
            </Link>

            {setTitle(movie.title)}
            {setDate(day.weekday)}
            {setTime(name)}

            <Footer
                src={movie.posterURL}
                alt={movie.title}
                title={movie.title}
                weekday={date}
                time={time}
            />

        </main>
    );
}
