import axios from "axios";
import Footer from "./Footer";
import Seat from "./Seat";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import loading from "../assets/loading.svg";
import styled from "styled-components";


export default function SeatSelection({ confirmSend }) {

    const { idSection } = useParams();
    const [sectionDetails, setSectionDetails] = useState();
    const [reserveSeats, setReserveSeats] = useState({ ids: [] });

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSection}/seats`);

        promise.then(response => {
            setSectionDetails(response.data);
        })
    }, [idSection]);


    if (sectionDetails === undefined) {
        return (
            <>
                <img src={loading} />
                <h1>Carregando...</h1>
            </>
        );
    }

    const { movie, day, name } = sectionDetails;

    function handleSeat(idSeat, addArray) {
        if (addArray) {
            setReserveSeats({ ids: [...reserveSeats.ids, idSeat] });
        } else {
            setReserveSeats({
                ids: reserveSeats.ids.filter((idSeatCurrent) => {
                    return idSeatCurrent !== idSeat;
                })
            })
        }
    }

    function handleName(e) {
        setNome(e.target.value);

        setReserveSeats({
            ...reserveSeats,
            "name": e.target.value
        });
    }

    function handleCPF(e) {
        setCpf(e.target.value);

        setReserveSeats({
            ...reserveSeats,
            "cpf": e.target.value
        });
    }

    function tryAgain() {
        if (reserveSeats.ids.length === 0) {
            alert("Selecione um assento para prosseguir!");
        } else if (nome.length === 0) {
            alert("Digite o seu nome completo para prosseguir!");
        } else if (cpf.length !== 11) {
            alert("Digite um CPF válido com 11 números!");
        }
    }

    function confirmation() {
        confirmSend(reserveSeats, idSection, '');
        axios.post(`https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many`, reserveSeats);
    }

    const isFilled = reserveSeats.ids.length !== 0 && nome.length !== 0 && !(cpf.length != 11);

    return (
        <main className="seat-selection-page">
            <div className="title-page">
                <span className="title">Selecione o(s) assento(s)</span>
            </div>
            <div className="seats">
                <div className="seats-to-choose">
                    {sectionDetails.seats.map(seat => (
                        (seat.isAvailable === true
                            ? <Seat classSeat="circle available" name={seat.name} id={seat.id} handle={handleSeat} />
                            : <Seat classSeat="circle unavailable" name={seat.name} />
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
                    <input type="text" className="input-name" placeholder='Digite seu nome...' onChange={handleName} value={nome} />
                </div>
                <div className="buyer-cpf">
                    <span className="cpf">
                        CPF do comprador:
                    </span>
                    <input type="text" className="input-cpf" placeholder='Digite seu CPF...' onChange={handleCPF} value={cpf} />
                </div>
            </div>

            {isFilled === true
                ? <Link to="/receipt">
                    <Button isFilled={isFilled} onClick={() => confirmation()}>
                        Reservar assento(s)
                    </Button>
                </Link>
                : <Link to="#">
                    <Button isFilled={isFilled} onClick={() => tryAgain()}>
                        Reservar assento(s)
                    </Button>
                </Link>
            }

            <Footer
                src={movie.posterURL}
                alt={movie.title}
                title={movie.title}
                weekday={day.weekday}
                time={name}
            />
        </main>
    );
}

const Button = styled.button`
    width: 225px;
    height: 42px;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #fff;

    border-radius: 3px;
    background-color: #e8833a;

    margin: auto;
    margin-top: 35px;

    cursor: ${({ isFilled }) => isFilled ? 'pointer' : 'not-allowed'};
    opacity: ${({ isFilled }) => isFilled ? '1' : '0.6'};
`