import "./App.css";
import logo from "./assets/logowizard.png";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
