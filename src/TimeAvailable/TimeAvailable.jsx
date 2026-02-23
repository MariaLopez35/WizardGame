import { Link } from "react-router-dom";

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

export default TimeAvalaible;
