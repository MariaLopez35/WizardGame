import "./HeroSection.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { gameContext } from "../../Context/gameContext";

function HeroSection() {
  const { handleStart } = useContext(gameContext);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">¡Listo para jugar!</h1>
        <p className="hero-eslogan">Encuentra el juego para ti al instante</p>
        <Link to="wizard">
          <button onClick={handleStart} className="hero-button">
            <i className="fas fa-gamepad"></i>Encontrar un juego
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
