import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="My Traveller Website" />
      <Routes>
        <Route
          path="/"
          element={
            <Home
            
              websiteName="My Traveller Website"
              tagline="We bring your ideas to life"
              imageUrl="https://img.freepik.com/free-photo/view-travel-items-assortment-still-life_23-2149617645.jpg?semt=ais_hybrid&w=740&q=80"
            />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer company="My Traveller Website" />
    </BrowserRouter>
  );
}

export default App;
