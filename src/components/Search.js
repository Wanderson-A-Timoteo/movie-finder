import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

function Search() {
  const { query } = useParams(); 
  
  const { movies, searchMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  return (
    <main className="search-page">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      
      {loading ? (
        <p className="loading">Carregando filmes na base do TMDB...</p>
      ) : (
        <ul className="movies-grid">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p className="no-results">Nenhum filme encontrado para "{query}".</p>
          )}
        </ul>
      )}
    </main>
  );
}

export default Search;
