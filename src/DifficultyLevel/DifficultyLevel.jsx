import { Link } from "react-router-dom";

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

export default DifficultyLevel;
