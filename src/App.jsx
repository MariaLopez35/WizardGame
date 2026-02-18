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

function TimeAvalaible({ wizardData, setWizardData }) {
  const times = ["15 min", "30 min", "1 hora", "Más de 2 horas"];

  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 1</h2>
      <h1 className="step-subtitle">Tiempo disponible</h1>
      <p className="step-question">¿Cuánto tiempo tienes para jugar?</p>

      <div className="options-grid">
        {times.map((duration) => (
          <button
            key={duration}
            onClick={() =>
              setWizardData((currentWizardData) => ({ ...currentWizardData, time: duration }))
            }
            className={`time-card ${wizardData.time === duration ? "active" : ""}`}
          >
            <i className="fa-solid fa-clock icons"></i>
            {duration}
          </button>
        ))}
      </div>

      <Link to="/mental-energy">
        <button className="next-btn">Siguiente</button>
      </Link>
    </section>
  );
}

function MentalEnergy({ wizardData, setWizardData }) {
  const energies = [
    { label: "Relajado", icon: "fa-solid fa-spa" },
    { label: "Normal", icon: "fa-regular fa-face-smile" },
    { label: "Con energía", icon: "fa-solid fa-bolt" },
    { label: "A tope", icon: "fa-solid fa-fire" },
  ];

  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 2</h2>
      <h1 className="step-subtitle">Energía mental</h1>
      <p className="step-question">¿Cómo está tu energía mental ahora?</p>

      <div className="options-grid">
        {energies.map((energy) => (
          <button
            key={energy.label}
            onClick={() =>
              setWizardData((currentWizardData) => ({ ...currentWizardData, energy: energy.label }))
            }
            className={`time-card ${wizardData.energy === energy.label ? "active" : ""}`}
          >
            <i className={`${energy.icon} icons`}></i>
            {energy.label}
          </button>
        ))}
      </div>

      <Link to="/game-type">
        <button className="next-btn">Siguiente</button>
      </Link>
    </section>
  );
}

function GameplayType({ wizardData, setWizardData }) {
  const gameOptions = [
    { label: "Solo", icon: "fa-solid fa-user" },
    { label: "Multijugador", icon: "fa-solid fa-users" },
    { label: "Cooperativo", icon: "fa-solid fa-handshake" },
  ];

  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 3</h2>
      <h1 className="step-subtitle">Tipo de Experiencia</h1>
      <p className="step-question">¿Cómo quieres jugar?</p>

      <div className="options-grid">
        {gameOptions.map((type) => (
          <button
            key={type.label}
            onClick={() =>
              setWizardData((currentWizardData) => ({ ...currentWizardData, gameType: type.label }))
            }
            className={`time-card ${wizardData.gameType === type.label ? "active" : ""}`}
          >
            <i className={`${type.icon} icons`}></i> {type.label}
          </button>
        ))}
      </div>

      <Link to="/difficulty-level">
        <button className="next-btn">Siguiente</button>
      </Link>
    </section>
  );
}

function DifficultyLevel({ wizardData, setWizardData }) {
  const difficultyOptions = [
    { label: "Fácil", icon: "fa-solid fa-star" },
    { label: "Media", icon: "fa-solid fa-star-half-stroke" },
    { label: "Difícil", icon: "fa-solid fa-skull" },
    { label: "Nivel Dios", icon: "fa-solid fa-crown" },
  ];

  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 4</h2>
      <h1 className="step-subtitle">Dificultad</h1>
      <p className="step-question">¿Qué nivel de dificultad prefieres?</p>

      <div className="options-grid">
        {difficultyOptions.map((difficulty) => (
          <button
            key={difficulty.label}
            onClick={() =>
              setWizardData((currentWizardData) => ({ ...currentWizardData, difficulty: difficulty.label }))
            }
            className={`time-card ${wizardData.difficulty === difficulty.label ? "active" : ""}`}
          >
            <i className={`${difficulty.icon} icons`}></i> {difficulty.label}
          </button>
        ))}
      </div>

      <Link to="/gaming-platform">
        <button className="next-btn">Siguiente</button>
      </Link>
    </section>
  );
}

function GamingPlatform({ wizardData, setWizardData }) {
  
  const platformOptions = [
    { label: "PC", icon: "fa-brands fa-windows" },
    { label: "PlayStation", icon: "fa-brands fa-playstation" },
    { label: "Xbox", icon: "fa-brands fa-xbox" },
    { label: "Switch", icon: "fa-solid fa-gamepad" },
  ];

  return (
    <section className="wizard-step">
      <h2 className="step-title">PASO 5</h2>
      <h1 className="step-subtitle">Plataforma</h1>
      <p className="step-question">¿En qué plataforma quieres jugar?</p>

      <div className="options-grid">
        {platformOptions.map((platform) => (
          <button
            key={platform.label}
            onClick={() =>
              setWizardData((currentWizardData) => ({ ...currentWizardData, platform: platform.label }))
            }
            className={`time-card ${wizardData.platform === platform.label ? "active" : ""}`}
          >
            <i className={`${platform.icon} icons`}></i> {platform.label}
          </button>
        ))}
      </div>

      <Link to="/results">
        <button className="next-btn">¡Vamos a jugar!</button>
      </Link>
    </section>
  );
}

function Results({ wizardData }) {
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

  const [wizardData, setWizardData] = useState({
    time: "",
    energy: "",
    gameType: "",
    difficulty: "",
    platform: ""
  });

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
        <Route
          path="/time-available"
          element={<TimeAvalaible wizardData={wizardData} setWizardData={setWizardData} />}
        />
        <Route
          path="/mental-energy"
          element={<MentalEnergy wizardData={wizardData} setWizardData={setWizardData} />}
        />
        <Route
          path="/game-type"
          element={<GameplayType wizardData={wizardData} setWizardData={setWizardData} />}
        />
        <Route
          path="/difficulty-level"
          element={<DifficultyLevel wizardData={wizardData} setWizardData={setWizardData} />}
        />
        <Route
          path="/gaming-platform"
          element={<GamingPlatform wizardData={wizardData} setWizardData={setWizardData} />}
        />
        <Route path="/results" element={<Results wizardData={wizardData} />} />
      </Routes>
    </>
  );
}


export default App;
