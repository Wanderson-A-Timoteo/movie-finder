import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function searchMovies(query) {
    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      setMovies(data.results);
    } catch (error) {
      console.log("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MovieContext.Provider value={{ movies, searchMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
}
