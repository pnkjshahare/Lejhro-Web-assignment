import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Innovation from './pages/Innovation';
import BussinessService from './pages/BussinessService';
import FinancialService from './pages/FinancialService';
import Bootcamp from './pages/Bootcamp';
import About from './pages/About';
import Contact from './pages/Contact';

const RoutesinReact = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovations" element={<Innovation />} />
        <Route path="/business-services" element={<BussinessService />} />
        <Route path="/financial-services" element={<FinancialService />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesinReact;
