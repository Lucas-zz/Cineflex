import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Utils/Header';
import MovieSelection from './Movie/MovieSelection';
import ReceiptPage from './Receipt/ReceiptPage';
import SeatSelection from './Seat/SeatSelection';
import SessionSelection from './Session/SessionSelection';

export default function App() {

    const [movieDetails, setMovieDetails] = useState({});

    function updateMovieDetails(currentDetails, sessionId, details) {
        setMovieDetails(details = { ...currentDetails, sessionId: sessionId });
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection />}></Route>
                <Route path="/sessions/:idMovie" element={<SessionSelection />}></Route>
                <Route path="/seats/:idSession" element={<SeatSelection confirmSend={updateMovieDetails} />}></Route>
                <Route path="/receipt" element={<ReceiptPage confirmSend={movieDetails} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
