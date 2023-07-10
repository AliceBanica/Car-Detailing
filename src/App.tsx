import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import DetailingInterior from './Components/DetailingInterior';
import DetailingExterior from './Components/DetailingExterior';
import Gallery from './Components/Gallery';
import Prices from './Components/Prices';
import Contact from './Components/Contact';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailing-interior" element={<DetailingInterior />} />
        <Route path="/detailing-exterior" element={<DetailingExterior />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/preturi" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
