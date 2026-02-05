// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2>Assigning Task :</h2>
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/services">Services</Link>
//         <Link to="/contact">Contact Us</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";
// interface NavbarProps {
//   title: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ title }) => {
//   const [menuOpen, setMenuOpen] = useState<boolean>(false);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">{title}</h2>

//       <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </button>

//       <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//         <NavLink to="/" onClick={() => setMenuOpen(false)}>
//           Home
//         </NavLink>
//         <NavLink to="/services" onClick={() => setMenuOpen(false)}>
//           Services
//         </NavLink>
//         <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//           Contact Us
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">{title}</h2>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
