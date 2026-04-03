import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { GiPopcorn } from "react-icons/gi";
import { FaSpinner } from "react-icons/fa";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        setPopularMovies(data.results);
      } catch (error) {
        console.log("Erro ao buscar filmes populares:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPopularMovies();
  }, []);

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
        <ul className="movies-grid">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Home;
