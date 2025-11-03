import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Flights} from './pages/Flights'
import {SelectedFlight} from './pages/SelectedFlight' 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Flights />} />
        <Route path="/flights/:id" element={<SelectedFlight />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}
