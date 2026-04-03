import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import { FaSpinner } from "react-icons/fa";

function Search() {
  const { query } = useParams(); 
  const { movies, searchMovies, loading } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
  }, [query]);

  const handleOpenModal = (movie) => setSelectedMovie(movie);
  const handleCloseModal = () => setSelectedMovie(null);

  return (
    <main className="search-page">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      
      {loading ? (
        <div className="loading-container">
          <FaSpinner className="spinner" />
          <p>Buscando filmes na base do TMDB...</p>
        </div>
      ) : (
        <ul className="movies-grid">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={handleOpenModal}
              />
            ))
          ) : (
            <p className="no-results">Nenhum filme encontrado para "{query}".</p>
          )}
        </ul>
      )}

      <MovieModal 
        movie={selectedMovie} 
        onClose={handleCloseModal} 
      />
    </main>
  );
}

export default Search;
