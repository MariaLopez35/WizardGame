import { useState, useEffect, useContext } from "react";
import { getGames } from "../Services/services";
import "./GameList.css";
import { Link } from "react-router-dom";
import { gameContext } from "../Context/gameContext";

function GameList() {
  const genreGames = ["puzzle", "action", "rpg"];
  const [games, setGames] = useState([]);
  const { wizardData, times, energies, difficultyOptions } =
    useContext(gameContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGames();

      const filteredGames = data.filter((game) => {
        return (
          game.genres.some((g) => genreGames.includes(g.slug)) &&
          game.tags.some((tag) => tag.slug === wizardData.gameType) &&
          times.includes(wizardData.time) &&
          energies.some((energy) => energy.label === wizardData.energy) &&
          difficultyOptions.some(
            (difficulty) => difficulty.label === wizardData.difficulty,
          )
        );
      });

      setGames(filteredGames.slice(0, 3));
    };

    fetchData();
  }, []);

  const getPlatforms = (platforms) => {
    const searchPlatform = wizardData.platform.toLowerCase();

    const filteredPlatforms = platforms.filter((platform) => {
      const platformName = platform.platform.name.toLowerCase();
      return platformName.includes(searchPlatform);
    });

    const platformNames = filteredPlatforms.map((name) => {
      return name.platform.name;
    });

    return platformNames;
  };

  return (
    <section className="wizard-step results-page">
      <h2 className="step-title glow-text">¡Recomendaciones listas!</h2>
      <h1 className="step-subtitle">Juegos recomendados para ti</h1>

      <div className="results-grid">
        {games.map((game) => {
          const platforms = getPlatforms(game.platforms);

          return (
            <div key={game.id} className="result-card neon-blue">
              <img
                src={game.background_image}
                alt={game.name}
                className="card-img"
              />

              <div className="card-info">
                <h3>{game.name}</h3>
                <p>{game.description}</p>

                <span className="platform-tag">
                  <i className="fa-solid fa-gamepad"></i>
                  {platforms.map((name) => (
                    <span key={name}> {name} </span>
                  ))}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <p className="step-text">
        Estas recomendaciones se basan en tu tiempo disponible, tu energía
        mental y tu tipo de experiencia preferida.
      </p>

      <Link to="/">
        <button className="next-btn neon-button">Buscar otra vez</button>
      </Link>
    </section>
  );
}

export default GameList;
