import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import MovieSelection from './MovieSelection';
import ReceiptPage from './ReceiptPage';
import SeatSelection from './SeatSelection';
import SectionSelection from './SectionSelection';

export default function App() {

    const [movieDetails, setMovieDetails] = useState({});

    function updateMovieDetails(currentDetails, sectionId, details) {
        setMovieDetails(details = { ...currentDetails, sectionId });
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Projeto_09_Cineflex_React/" element={<MovieSelection />}></Route>
                <Route path="/Projeto_09_Cineflex_React/sections/:idMovie" element={<SectionSelection />}></Route>
                <Route path="/Projeto_09_Cineflex_React/seats/:idSection" element={<SeatSelection confirmSend={updateMovieDetails} />}></Route>
                <Route path="/Projeto_09_Cineflex_React/receipt" element={<ReceiptPage confirmSend={movieDetails} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
