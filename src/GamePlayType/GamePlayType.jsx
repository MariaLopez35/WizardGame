import { Link } from "react-router-dom";

function GamePlayType({ wizardData, setWizardData }) {
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

export default GamePlayType;
