import { useState } from "react";
import "./App.css";
import logo from "./assets/logowizard.png";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

function HeroSection({ handleStart }) {
  return (
    <>
    
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
    </>
  );
}

function TimeAvalaible() {
  return (
    <>
      <section className="wizard-step">
        <h2 className="step-title">PASO 1</h2>
        <h1 className="step-subtitle">Tiempo disponible</h1>
        <p className="step-question">¿Cuánto tiempo tienes para jugar?</p>

        <div className="options-grid">
          <button className="time-card">
            <i className="fa-solid fa-clock icons"></i>
            15 min
          </button>

          <button className="time-card">
            <i className="fa-solid fa-clock icons"></i>
            30 min
          </button>

          <button className="time-card">
            <i className="fa-solid fa-clock icons"></i>1 hora
          </button>

          <button className="time-card">
            <i className="fa-solid fa-clock icons"></i>
            Más de 2 horas
          </button>
        </div>
        <Link to="/mental-state">
          <button className="next-btn">Siguiente</button>
        </Link>
      </section>
    </>
  );
}

function App() {
  const [pulsed, setPulsed] = useState(true);

  const handleStart = () => {
    setPulsed(false);
  };

  return (
    <>
    <Header />
    <Routes>
      <Route
        path="/"
        element={
          pulsed ? (
            <HeroSection handleStart={handleStart} />
          ) : (
            <Navigate to="/time-available" />
          )
        }
      />
      <Route path="/time-available" element={<TimeAvalaible />} />
    </Routes>
    </>
    
  );
}

export default App;
