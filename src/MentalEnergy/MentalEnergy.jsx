import { Link } from "react-router-dom";

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

export default MentalEnergy;
