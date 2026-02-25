import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TimeAvalaible from "./components/TimeAvailable/TimeAvailable";
import MentalEnergy from "./components/MentalEnergy/MentalEnergy";
import GamePlayType from "./components/GamePlayType/GamePlayType";
import DifficultyLevel from "./components/DifficultyLevel/DifficultyLevel";
import GamingPlatform from "./components/GamingPlatform/GamingPlatform";
import GameList from "./components/GameList/GameList";
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
