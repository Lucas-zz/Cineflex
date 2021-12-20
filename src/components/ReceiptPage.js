import { Link } from "react-router-dom";

export default function ReceiptPage({ title, username, cpf, day, time }) {

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    const seats = [1, 2, 3, 4];

    return (
        <main className="receipt-page">
            <div className="title-page">
                <span className="title">Pedido feito<br />com sucesso!</span>
            </div>
            <div className="content">
                <div className="movie-session">
                    <div className="title">
                        Filme e sessão
                    </div>
                    <div className="data">
                        {title}
                    </div>
                    <div className="data">
                        {day} {time}
                    </div>
                </div>
                <div className="tickets">
                    <div className="title">
                        Ingressos
                    </div>
                    {seats.map(seat => (
                        <div className="data">
                            Assento {seat}
                        </div>
                    ))}
                </div>
                <div className="buyer">
                    <div className="title">
                        Comprador
                    </div>
                    <div className="data">
                        Nome: {username}
                    </div>
                    <div className="data">
                        CPF: {cpf}
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className="home-button">
                    <button>Voltar para Home</button>
                </div>
            </Link>

        </main>
    );
}
