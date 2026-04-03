import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import { FaSpinner } from "react-icons/fa";

function Search() {
  const { query } = useParams();
  const { movies, searchMovies, loading, totalPages } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  useEffect(() => {
    if (query) {
      searchMovies(query, currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [query, currentPage]);

  const handleOpenModal = (movie) => setSelectedMovie(movie);
  const handleCloseModal = () => setSelectedMovie(null);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

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
        <>
          <ul className="movies-grid">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={handleOpenModal} />
              ))
            ) : (
              <p className="no-results">Nenhum filme encontrado para "{query}".</p>
            )}
          </ul>

          {totalPages > 1 && (
            <div className="pagination-controls">
              <button 
                className="pagination-button" 
                onClick={handlePreviousPage} 
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              
              <span className="pagination-info">
                Página {currentPage} de {totalPages}
              </span>
              
              <button 
                className="pagination-button" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}

      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
    </main>
  );
}

export default Search;
