import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

function Search() {
  // Pega a palavra digitada na URL (ex: /search/batman -> query = "batman")
  const { query } = useParams(); 
  
  // Trazemos as funções do nosso estado global
  const { movies, searchMovies, loading } = useContext(MovieContext);

  // Assim que o componente carregar (ou a query mudar), ele faz a busca
  useEffect(() => {
    if (query) {
      searchMovies(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            // Se achou filmes, mapeia e cria um MovieCard para cada um
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            // Se a API retornar vazio
            <p className="no-results">Nenhum filme encontrado para "{query}".</p>
          )}
        </ul>
      )}
    </main>
  );
}

export default Search;
