import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Salon from "./pages/notreboutique";
import Prestations from "./pages/menu";
import Realisations from "./pages/Realisations";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotreRestaurant from "./pages/notreboutique";
import Menu from "./pages/menu";



export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/salon" element={<Salon />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/notre-restaurant" element={<NotreRestaurant />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
