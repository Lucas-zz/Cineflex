export default function ReceiptPage() {
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
    );
}
