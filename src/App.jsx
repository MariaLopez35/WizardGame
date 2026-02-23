import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logowizard.png";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { getGames } from "./Services/services";

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

function TimeAvalaible({ wizardData, setWizardData, times }) {
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
              setWizardData((currentWizardData) => ({
                ...currentWizardData,
                time: duration,
              }))
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

function MentalEnergy({ wizardData, setWizardData, energies }) {
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
              setWizardData((currentWizardData) => ({
                ...currentWizardData,
                energy: energy.label,
              }))
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
    { label: "Solo", icon: "fa-solid fa-user", type: "singleplayer" },
    { label: "Multijugador", icon: "fa-solid fa-users", type: "multiplayer" },
    {
      label: "Cooperativo",
      icon: "fa-solid fa-handshake",
      type: "cooperative",
    },
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
              setWizardData((currentWizardData) => ({
                ...currentWizardData,
                gameType: type.type,
              }))
            }
            className={`time-card ${wizardData.gameType === type.type ? "active" : ""}`}
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

function DifficultyLevel({ wizardData, setWizardData, difficultyOptions }) {
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
              setWizardData((currentWizardData) => ({
                ...currentWizardData,
                difficulty: difficulty.label,
              }))
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
              setWizardData((currentWizardData) => ({
                ...currentWizardData,
                platform: platform.label,
              }))
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

function Results({ wizardData, times, energies, difficultyOptions }) {
  const genreGames = ["puzzle", "action", "rpg"];
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGames();

      const filteredGames = data.filter((game) => {
        return (
          game.genres.some((g) => genreGames.includes(g.slug)) &&
          game.tags.some((tag) => tag.slug === wizardData.gameType) &&
          times.includes(wizardData.time) &&
          energies.some((energy) => energy.label === wizardData.energy) &&
          difficultyOptions.some(
            (difficulty) => difficulty.label === wizardData.difficulty
          )
        );
      });

      setGames(filteredGames.slice(0, 3));
    };

    fetchData();
  }, []);

  const getPlatforms = (platforms) => {
    const searchPlatform = wizardData.platform.toLowerCase();

    const filteredPlatforms = platforms.filter((platform) => {
      const platformName = platform.platform.name.toLowerCase();
      return platformName.includes(searchPlatform);
    });

    const platformNames = filteredPlatforms.map((name) => {
      return name.platform.name;
    });

    return platformNames;
  };

  return (
    <section className="wizard-step results-page">
      <h2 className="step-title glow-text">¡Recomendaciones listas!</h2>
      <h1 className="step-subtitle">Juegos recomendados para ti</h1>

      <div className="results-grid">
        {games.map((game) => {
          const platforms = getPlatforms(game.platforms);

          return (
            <div key={game.id} className="result-card neon-blue">
              <img
                src={game.background_image}
                alt={game.name}
                className="card-img"
              />

              <div className="card-info">
                <h3>{game.name}</h3>
                <p>{game.description}</p>

                <span className="platform-tag">
                  <i className="fa-solid fa-gamepad"></i>
                  {platforms.map((name) => (
                    <span key={name}> {name} </span>
                  ))}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="step-text">
        Estas recomendaciones se basan en tu tiempo disponible, tu energía
        mental y tu tipo de experiencia preferida.
      </p>

      <Link to="/">
        <button className="next-btn neon-button">
          Buscar otra vez
        </button>
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
    platform: "",
  });
  const times = ["15 min", "30 min", "1 hora", "Más de 2 horas"];
  const energies = [
    { label: "Relajado", icon: "fa-solid fa-spa" },
    { label: "Normal", icon: "fa-regular fa-face-smile" },
    { label: "Con energía", icon: "fa-solid fa-bolt" },
    { label: "A tope", icon: "fa-solid fa-fire" },
  ];
  const difficultyOptions = [
    { label: "Fácil", icon: "fa-solid fa-star" },
    { label: "Media", icon: "fa-solid fa-star-half-stroke" },
    { label: "Difícil", icon: "fa-solid fa-skull" },
    { label: "Nivel Dios", icon: "fa-solid fa-crown" },
  ];

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
          element={
            <TimeAvalaible
              wizardData={wizardData}
              setWizardData={setWizardData}
              times={times}
            />
          }
        />
        <Route
          path="/mental-energy"
          element={
            <MentalEnergy
              wizardData={wizardData}
              setWizardData={setWizardData}
              energies={energies}
            />
          }
        />
        <Route
          path="/game-type"
          element={
            <GameplayType
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          }
        />
        <Route
          path="/difficulty-level"
          element={
            <DifficultyLevel
              wizardData={wizardData}
              setWizardData={setWizardData}
              difficultyOptions={difficultyOptions}
            />
          }
        />
        <Route
          path="/gaming-platform"
          element={
            <GamingPlatform
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results
              wizardData={wizardData}
              times={times}
              energies={energies}
              difficultyOptions={difficultyOptions}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
