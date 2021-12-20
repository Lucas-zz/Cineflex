import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import MovieSelection from './MovieSelection';
import ReceiptPage from './ReceiptPage';
import SeatSelection from './SeatSelection';
import SectionSelection from './SectionSelection';

export default function App() {

    const [filme, setFilme] = useState([]);
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection />}></Route>
                <Route path="/sections/:idMovie" element={<SectionSelection />}></Route>
                <Route path="/seats/:idSection" element={<SeatSelection filme={filme} setFilme={setFilme} setTitle={setTitle} username={username} setUsername={setUsername} cpf={cpf} setCpf={setCpf} date={date} setDate={setDate} time={time} setTime={setTime} />}></Route>
                <Route path="/receipt" element={<ReceiptPage title={title} username={username} cpf={cpf} time={time} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
