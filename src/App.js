import React from 'react'

import image1 from "./assets/image 3.png";
import image2 from "./assets/image 6.png";

export default function App() {
    return (
        <>
            {/* ========================================================================================================= */}

            <header className="header">
                CINEFLEX
            </header>

            {/* ========================================================================================================= */}

            <main className="movie-selection-page hidden">
                <div className="title-page">
                    <span className="title">Selecione o filme</span>
                </div>
                <div className="content">
                    <div className="container">
                        <img src={image1} alt="cartaz-1" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image1} alt="cartaz-1" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                </div>
            </main>

            {/* ========================================================================================================= */}

            <main className="time-selection-page hidden">
                <div className="title-page">
                    <span className="title">Selecione o horário</span>
                </div>
                <div className="content">
                    <div className="container">
                        <span className="date">
                            Quinta-Feira - 24/06/2021
                        </span>
                        <div className="hours">
                            <span className="hours-box">15:00</span>
                            <span className="hours-box">19:00</span>
                        </div>
                    </div>
                    <div className="container">
                        <span className="date">
                            Sexta-Feira - 25/06/2021
                        </span>
                        <div className="hours">
                            <span className="hours-box">15:00</span>
                            <span className="hours-box">19:00</span>
                        </div>
                    </div>
                </div>
                <div className="choosenMovie">
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="choosenMovieData">
                        <span className="choosenMovieName">
                            Enola Holmes
                        </span>
                    </div>
                </div>
            </main>

            {/* ========================================================================================================= */}

            <main className="seat-selection-page ">
                <div className="title-page">
                    <span className="title">Selecione o(s) assento(s)</span>
                </div>
                <div className="seats">
                    <div className="seats-to-choose">
                        <div className="circle selected">01</div>
                        <div className="circle selected">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle unavailable">01</div>
                        <div className="circle unavailable">01</div>
                        <div className="circle unavailable">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>
                        <div className="circle">01</div>

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
                        <input type="text" className="input-cpf" placeholder='Digite seu CPF...' />
                    </div>
                </div>

                <div className="reservation-button">
                    <button>Reservar assento(s)</button>
                </div>

                <div className="choosenMovie">
                    <div className="container">
                        <img src={image2} alt="cartaz-2" />
                    </div>
                    <div className="choosenMovieData">
                        <span className="choosenMovieName">
                            Enola Holmes
                        </span>
                        <span className="choosenMovieTime">
                            Quinta-Feira - 15:00
                        </span>
                    </div>
                </div>
            </main>

            {/* ========================================================================================================= */}

            <main className="receipt-page hidden">
                <div className="title-page">
                    <span className="title">Pedido feito<br />com sucesso!</span>
                </div>
                <div className="content">
                    <div className="movie-session">
                        <div className="title">
                            Filme e sessão
                        </div>
                        <div className="data">
                            Enola Holmes
                        </div>
                        <div className="data">
                            24/06/2021 15:00
                        </div>
                    </div>
                    <div className="tickets">
                        <div className="title">
                            Ingressos
                        </div>
                        <div className="data">
                            Assento 15
                        </div>
                        <div className="data">
                            Assento 16
                        </div>
                    </div>
                    <div className="buyer">
                        <div className="title">
                            Comprador
                        </div>
                        <div className="data">
                            Nome: João da Silva Sauro
                        </div>
                        <div className="data">
                            CPF: 123.456.789-10
                        </div>
                    </div>
                </div>

                <div className="home-button">
                    <button>Voltar para Home</button>
                </div>

            </main>

        </>
    )
}
