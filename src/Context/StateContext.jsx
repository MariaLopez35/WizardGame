import { useState } from "react";
import { gameContext } from "./gameContext";

function StateContext({ children }) {
  const [pulsed, setPulsed] = useState(true);
  const times = ["15 min", "30 min", "1 hora", "Más de 2 horas"];
  const [wizardData, setWizardData] = useState({
    time: 0,
    energy: "",
    gameType: "",
    difficulty: "",
    platform: "",
  });
  const energies = [
    { label: "Relajado", icon: "fa-solid fa-spa" },
    { label: "Normal", icon: "fa-regular fa-face-smile" },
    { label: "Con energía", icon: "fa-solid fa-bolt" },
    { label: "A tope", icon: "fa-solid fa-fire" },
  ];
  const gameOptions = [
    { label: "Solo", icon: "fa-solid fa-user", type: "singleplayer" },
    { label: "Multijugador", icon: "fa-solid fa-users", type: "multiplayer" },
    {
      label: "Cooperativo",
      icon: "fa-solid fa-handshake",
      type: "cooperative",
    },
  ];

  const difficultyOptions = [
    { label: "Fácil", icon: "fa-solid fa-star" },
    { label: "Media", icon: "fa-solid fa-star-half-stroke" },
    { label: "Difícil", icon: "fa-solid fa-skull" },
    { label: "Nivel Dios", icon: "fa-solid fa-crown" },
  ];

  const platformOptions = [
    { label: "PC", icon: "fa-brands fa-windows" },
    { label: "PlayStation", icon: "fa-brands fa-playstation" },
    { label: "Xbox", icon: "fa-brands fa-xbox" },
    { label: "Switch", icon: "fa-solid fa-gamepad" },
  ];

  const handleStart = () => {
    setPulsed(false);
  };

  return (
    <gameContext.Provider
      value={{
        handleStart,
        pulsed,
        times,
        wizardData,
        setWizardData,
        energies,
        gameOptions,
        difficultyOptions,
        platformOptions,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}

export default StateContext;
