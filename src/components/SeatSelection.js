import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import loading from "../assets/loading.svg";

export default function SeatSelection() {
    // function ValidaCPF() {

    //     var ao_cpf = document.querySelector("ao_cpf").value;
    //     var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
    //     if (cpfValido.test(ao_cpf) == false) {

    //         ao_cpf = ao_cpf.replace(/\D/g, ""); //Remove tudo o que não é dígito

    //         if (ao_cpf.length == 11) {
    //             ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //             ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //             //de novo (para o segundo bloco de números)
    //             ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

    //             var valorValido = document.querySelector("ao_cpf").value = ao_cpf;
    //         } else {
    //             console.log("CPF invalido");
    //         }

    //     }
    // }

    const [filme, setFilme] = useState([]);
    const { idSection } = useParams();

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
                        (seat.isAvailable == true
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
                        <div className="circle available"></div>
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
                    <input type="text" className="input-name" placeholder='Digite seu nome...' />
                </div>
                <div className="buyer-cpf">
                    <span className="cpf">
                        CPF do comprador:
                    </span>
                    <input type="text" name="ao_cpf" className="input-cpf" placeholder='Digite seu CPF...' /*onBlur={ValidaCPF()}*/ />
                </div>
            </div>
            <Link to="/receipt">
                <div className="reservation-button">
                    <button>Reservar assento(s)</button>
                </div>
            </Link>

            <div className="choosenMovie">
                <div className="container">
                    <img src={filme.movie.posterURL} alt="cartaz-2" />
                </div>
                <div className="choosenMovieData">
                    <span className="choosenMovieName">
                        {filme.movie.title}
                    </span>
                    <span className="choosenMovieTime">
                        {filme.day.weekday} - {filme.name}
                    </span>
                </div>
            </div>
        </main>
    );
}
