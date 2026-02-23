const apiKey = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.rawg.io/api/games?key=${apiKey}`;

export const getGames = async () => {
  const response = await fetch(API_URL, { cache: "no-store" });
  const data = await response.json();
  return data.results;
};
