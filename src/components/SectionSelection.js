import image1 from "../assets/image 3.png";
import image2 from "../assets/image 6.png";

export default function SectionSelection() {
    return (
        <main className="time-selection-page">
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
    );
}
