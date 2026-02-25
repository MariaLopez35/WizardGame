import logo from "../../assets/logowizard.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
