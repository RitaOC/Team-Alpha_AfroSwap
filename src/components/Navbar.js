import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../images/Logo.PNG";

function Navbar() {
    const navRef = useRef();
  // const hideNavbar = () => {
  //   navRef.current.classList.remove("responsive_nav");
  // };
    const navigate = useNavigate();
    const navigateToSwap = () => {
        navigate('/swap');
    };

    const navigateHome = () => {
        navigate('/');
    }

    const navigateContact = () => {
        navigate('/contact');
    }
    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
        <div>
            <img id="logo" src={logo} alt="Logo" />
            <h2 className="name">AFROSWAP</h2>
        </div>
        <nav ref={navRef}>
            <Link onClick={navigateHome}>Home</Link>
            <a href="/#">About us</a>
            <Link onClick={navigateContact}>Contact</Link>
            <button className="wallet-connect" onClick={navigateToSwap}>Swap Token</button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
        </header>
    );    
}

export default Navbar
