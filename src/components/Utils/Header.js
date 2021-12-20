import { useNavigate } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";

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
                    <img onClick={Navigate} src={backArrow} alt="back-arrow" />
                </header>
                :
                <header className="header">
                    <p>CINEFLEX</p>
                </header>
            }
        </>
    );
}
