import "./App.css";
import logo from "./assets/logowizard.png";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="hero">
      <div class="hero-content">
        <h1 className="hero-title">¡Listo para jugar!</h1>
        <p className="hero-eslogan">Encuentra el juego para ti al instante</p>
        <button className="hero-button">
          <i className="fas fa-gamepad"></i>Encontrar un juego
        </button>
      </div>
    </div>
  );
}


function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
