import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const searchMovies = async (query, page = 1) => {
    if (!query) return;

    setLoading(true);
    try {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR&page=${page}`;

      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.results);
      
      const availablePages = data.total_pages > 500 ? 500 : data.total_pages;
      setTotalPages(availablePages);
      
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, searchMovies, loading, totalPages }}>
      {children}
    </MovieContext.Provider>
  );
};
