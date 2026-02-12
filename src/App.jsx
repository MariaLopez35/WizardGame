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
          <button value="15 min" className="time-card" >
            <i className="fa-solid fa-clock icons"></i>
            15 min
          </button>

          <button value="30 min" className="time-card">
            <i className="fa-solid fa-clock icons"></i>
            30 min
          </button>

          <button value="1 hora" className="time-card">
            <i className="fa-solid fa-clock icons"></i>1 hora
          </button>

          <button value="Mas de 2 horas" className="time-card">
            <i className="fa-solid fa-clock icons"></i>
            Más de 2 horas
          </button>
        </div>
        <Link to="/mental-energy">
          <button className="next-btn">Siguiente</button>
        </Link>
      </section>
    </>
  );
}

function MentalEnergy() {
  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 2</h2>
      <h1 className="step-subtitle">Energía mental</h1>
      <p className="step-question">¿Cómo está tu energía mental ahora?</p>

      <div className="options-grid">
        <button className="time-card">
          <i className="fa-solid fa-spa icons"></i>
          Relajado
        </button>

        <button className="time-card">
          <i className="fa-regular fa-face-smile icons"></i>
          Normal
        </button>

        <button className="time-card">
          <i className="fa-solid fa-bolt icons"></i>
          Con energía
        </button>

        <button className="time-card">
          <i className="fa-solid fa-fire icons"></i>A tope
        </button>
      </div>
      <Link to="/game-type">
        <button className="next-btn">Siguiente</button>
      </Link>
    </section>
  );
}

function GameplayType() {
  return (
    <section className="wizard-step">
      <div className="wizard">
        <div className="wizard__content">
          <h2 className="step-title">PASO 3</h2>
          <h1 className="step-subtitle">Tipo de Experiencia</h1>
          <p className="step-question">¿Cómo quieres jugar?</p>
        </div>

        <div className="options-grid">
          <button className="time-card">
            <i className="fa-solid fa-user icons"></i> Solo
          </button>

          <button className="time-card">
            <i className="fa-solid fa-users icons"></i> Multijugador
          </button>

          <button className="time-card">
            <i className="fa-solid fa-handshake icons"></i> Cooperativo
          </button>
        </div>
        <Link to="/difficulty-level">
          <button className="next-btn">Siguiente</button>
        </Link>
      </div>
    </section>
  );
}

function DifficultyLevel() {
  return (
    <section className="wizard-step">
      <div className="wizard">
        <div className="wizard__content">
          <h2 className="step-title">PASO 4</h2>
          <h1 className="step-subtitle">Dificultad</h1>
          <p className="step-question">¿Qué nivel de dificultad prefieres?</p>
        </div>

        <div className="options-grid">
          <button className="time-card">
            <i className="fa-solid fa-star icons"></i> Fácil
          </button>

          <button className="time-card">
            <i className="fa-solid fa-star-half-stroke icons"></i> Media
          </button>

          <button className="time-card">
            <i className="fa-solid fa-skull icons"></i> Difícil
          </button>

          <button className="time-card">
            <i className="fa-solid fa-crown icons"></i> Nivel Dios
          </button>
        </div>
        <Link to="/gaming-platform">
          <button className="next-btn">Siguiente</button>
        </Link>
      </div>
    </section>
  );
}

function GamingPlatform() {
  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 5</h2>
      <h1 className="step-subtitle">Plataforma</h1>
      <p className="step-question">¿En qué plataforma quieres jugar?</p>

      <div className="options-grid">
        <button className="time-card">
          <i className="fa-brands fa-windows icons"></i>
          PC
        </button>

        <button className="time-card">
          <i className="fa-brands fa-playstation icons"></i>
          PlayStation
        </button>

        <button className="time-card">
          <i className="fa-brands fa-xbox icons"></i>
          Xbox
        </button>

        <button className="time-card">
          <i className="fa-solid fa-gamepad icons"></i>
          Switch
        </button>
      </div>
      <Link to="/results">
        <button className="next-btn">¡Vamos a jugar!</button>
      </Link>
    </section>
  );
}

function Results() {
  return (
    <section className="wizard-step results-page">
      <h2 className="step-title glow-text">¡Recomendaciones listas!</h2>
      <h1 className="step-subtitle">Juegos recomendados para ti</h1>

      <div className="results-grid">
        <div className="result-card neon-blue">
          <img src={logo} alt="CyberQuest" className="card-img" />
          <div className="card-info">
            <h3>CyberQuest</h3>
            <p>
              Un juego de acción y aventura pensado para tu energía y tiempo
              disponible.
            </p>
            <span className="platform-tag">
              <i className="fa-solid fa-gamepad"></i> PC
            </span>
          </div>
        </div>

        <div className="result-card neon-purple">
          <img
            src="/images/galaxy-fighters.jpg"
            alt="Galaxy Fighters"
            className="card-img"
          />
          <div className="card-info">
            <h3>Galaxy Fighters</h3>
            <p>Acción cooperativa online, ideal para partidas rápidas.</p>
            <span className="platform-tag">
              <i className="fa-solid fa-gamepad"></i> PlayStation
            </span>
          </div>
        </div>

        <div className="result-card neon-orange">
          <img
            src="/images/kingdom-story.jpg"
            alt="Kingdom Story"
            className="card-img"
          />
          <div className="card-info">
            <h3>Kingdom Story</h3>
            <p>Perfecto para relajarte y explorar mundos de fantasía.</p>
            <span className="platform-tag">
              <i className="fa-solid fa-gamepad"></i> Switch
            </span>
          </div>
        </div>
      </div>

      <p className="step-text">
        Estas recomendaciones se basan en tu tiempo disponible, tu energía
        mental y tu tipo de experiencia preferida.
      </p>
      <Link to="/">
        <button className="next-btn neon-button">Buscar otra vez</button>
      </Link>
    </section>
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
        <Route path="/mental-energy" element={<MentalEnergy />} />
        <Route path="/game-type" element={<GameplayType />} />
        <Route path="/difficulty-level" element={<DifficultyLevel />} />
        <Route path="/gaming-platform" element={<GamingPlatform />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
