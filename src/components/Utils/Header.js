import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/img/back-arrow.svg";

export default function Header() {
    const navigate = useNavigate();

    function Navigate() {
        navigate(-1);
    }

    return (
        <>
            {window.location.pathname !== "/"
                ?
                <header className="header">
                    <p>CINEFLEX</p>
                    <ion-icon onClick={Navigate} className="back-arrow" name="chevron-back-sharp"></ion-icon>
                </header>
                :
                <header className="header">
                    <p>CINEFLEX</p>
                    <h1>A Driven<br />Education<br />Project</h1>
                </header>
            }
        </>
    );
}
