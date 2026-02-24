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
import { useContext } from "react";
import { gameContext } from "./Context/gameContext";

function App() {
  const { pulsed } = useContext(gameContext);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={pulsed ? <HeroSection /> : <Navigate to="/time-available" />}
        />
        <Route path="/time-available" element={<TimeAvalaible />} />
        <Route path="/mental-energy" element={<MentalEnergy />} />
        <Route path="/game-type" element={<GamePlayType />} />
        <Route path="/difficulty-level" element={<DifficultyLevel />} />
        <Route path="/gaming-platform" element={<GamingPlatform />} />
        <Route path="/results" element={<GameList />} />
      </Routes>
    </>
  );
}

export default App;
