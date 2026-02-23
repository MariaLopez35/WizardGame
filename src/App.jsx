import { useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import TimeAvalaible from "./TimeAvailable/TimeAvailable";
import MentalEnergy from "./MentalEnergy/MentalEnergy";
import GamePlayType from "./GamePlayType/GamePlayType";
import DifficultyLevel from "./DifficultyLevel/DifficultyLevel";
import GamingPlatform from "./GamingPlatform/GamingPlatform";
import GameList from "./GameList/GameList";

function App() {
  const [pulsed, setPulsed] = useState(true);

  const [wizardData, setWizardData] = useState({
    time: "",
    energy: "",
    gameType: "",
    difficulty: "",
    platform: "",
  });
  const times = ["15 min", "30 min", "1 hora", "Más de 2 horas"];
  const energies = [
    { label: "Relajado", icon: "fa-solid fa-spa" },
    { label: "Normal", icon: "fa-regular fa-face-smile" },
    { label: "Con energía", icon: "fa-solid fa-bolt" },
    { label: "A tope", icon: "fa-solid fa-fire" },
  ];
  const difficultyOptions = [
    { label: "Fácil", icon: "fa-solid fa-star" },
    { label: "Media", icon: "fa-solid fa-star-half-stroke" },
    { label: "Difícil", icon: "fa-solid fa-skull" },
    { label: "Nivel Dios", icon: "fa-solid fa-crown" },
  ];

  const handleStart = () => {
    setPulsed(false);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            pulsed ? (
              <HeroSection handleStart={handleStart} />
            ) : (
              <Navigate to="/time-available" />
            )
          }
        />
        <Route
          path="/time-available"
          element={
            <TimeAvalaible
              wizardData={wizardData}
              setWizardData={setWizardData}
              times={times}
            />
          }
        />
        <Route
          path="/mental-energy"
          element={
            <MentalEnergy
              wizardData={wizardData}
              setWizardData={setWizardData}
              energies={energies}
            />
          }
        />
        <Route
          path="/game-type"
          element={
            <GamePlayType
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          }
        />
        <Route
          path="/difficulty-level"
          element={
            <DifficultyLevel
              wizardData={wizardData}
              setWizardData={setWizardData}
              difficultyOptions={difficultyOptions}
            />
          }
        />
        <Route
          path="/gaming-platform"
          element={
            <GamingPlatform
              wizardData={wizardData}
              setWizardData={setWizardData}
            />
          }
        />
        <Route
          path="/results"
          element={
            <GameList
              wizardData={wizardData}
              times={times}
              energies={energies}
              difficultyOptions={difficultyOptions}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
