import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import { GiPopcorn } from "react-icons/gi";
import { FaSpinner } from "react-icons/fa";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchPopularMovies() {
      setLoading(true);
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${currentPage}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        setPopularMovies(data.results);
        
        const availablePages = data.total_pages > 500 ? 500 : data.total_pages;
        setTotalPages(availablePages);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        console.log("Erro ao buscar filmes populares:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMovies();
  }, [currentPage]);

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
      <h2 className="title" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        Filmes Populares do Momento <GiPopcorn color="#f5c518" />
      </h2>
      
      {loading ? (
        <div className="loading-container">
          <FaSpinner className="spinner" />
          <p>Carregando os sucessos do cinema...</p>
        </div>
      ) : (
        <>
          <ul className="movies-grid">
            {popularMovies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={handleOpenModal} 
              />
            ))}
          </ul>

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
        </>
      )}

      <MovieModal 
        movie={selectedMovie} 
        onClose={handleCloseModal} 
      />
    </main>
  );
}

export default Home;
