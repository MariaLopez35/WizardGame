import { Link } from "react-router-dom";
import { useContext } from "react";
import { gameContext } from "../../Context/gameContext";
import "./GamePlayType.css"

function GamePlayType() {
  const { wizardData, setWizardData, gameOptions } = useContext(gameContext);

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
            className={`time-card ${wizardData.gameType === type.type && "active"}`}
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
