import { Link } from "react-router-dom";
import { useContext } from "react";
import { gameContext } from "../../Context/gameContext";
import "./GamingPlatform.css"

function GamingPlatform() {
  const { wizardData, setWizardData, platformOptions } =
    useContext(gameContext);

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
            className={`time-card ${wizardData.platform === platform.label && "active"}`}
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

export default GamingPlatform;
