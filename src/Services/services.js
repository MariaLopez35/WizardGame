const API_URL = "https://api.rawg.io/api/games?key=3dde0f83638746ada05fba1a2d37cb5f";

export const getGames = async () => {
  const response = await fetch(API_URL, { cache: "no-store" });
  const data = await response.json();
  return data.results;
};