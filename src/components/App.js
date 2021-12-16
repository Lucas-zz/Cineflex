import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MovieSelection from './MovieSelection';
import ReceiptPage from './ReceiptPage';
import SeatSelection from './SeatSelection';
import SectionSelection from './SectionSelection';

export default function App() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieSelection />}></Route>
                <Route path="/sections/:idMovie" element={<SectionSelection />}></Route>
                <Route path="/seats/:idSection" element={<SeatSelection />}></Route>
                <Route path="/receipt" element={<ReceiptPage />}></Route>
            </Routes>
        </BrowserRouter>

    )
}
