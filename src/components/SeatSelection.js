import image1 from "../assets/image 3.png";
import image2 from "../assets/image 6.png";

export default function SeatSelection() {
    function ValidaCPF() {
        var ao_cpf = document.forms.form1.ao_cpf.value;
        var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
        ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

        var valorValido = document.getElementById("ao_cpf").value = ao_cpf;
    }


    return (
        <main className="seat-selection-page">
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
    );
}
