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
              imageUrl="https://example.com/home-image.jpg"
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
