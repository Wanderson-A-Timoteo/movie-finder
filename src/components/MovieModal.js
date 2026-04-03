import { useState, useEffect } from "react";
import { FaTimes, FaStar, FaCalendarAlt } from "react-icons/fa";

function MovieModal({ movie, onClose }) {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!movie) {
      setTrailerKey(null);
      return;
    }

    async function fetchTrailer() {
      try {
        const apiKey = process.env.REACT_APP_TMDB_API_KEY;
        
        let url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=pt-BR`;
        let response = await fetch(url);
        let data = await response.json();

        let trailers = data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailers.length === 0) {
          url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=en-US`;
          response = await fetch(url);
          data = await response.json();
          trailers = data.results.filter(
            (video) => video.type === "Trailer" && video.site === "YouTube"
          );
        }

        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        } else {
          setTrailerKey(null);
        }
      } catch (error) {
        console.error("Erro ao buscar o trailer:", error);
        setTrailerKey(null);
      }
    }

    fetchTrailer();
  }, [movie]);

  if (!movie) return null;

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=Sem+Capa";

  const releaseDate = movie.release_date 
    ? new Date(movie.release_date).toLocaleDateString("pt-BR")
    : "Data desconhecida";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="modal-body">
          <img src={imageUrl} alt={movie.title} className="modal-image" />
          <div className="modal-info">
            <h2>{movie.title}</h2>
            <p className="modal-overview">
              {movie.overview || "Sinopse não disponível em português para este filme."}
            </p>
            <div className="modal-meta">
              <span>
                <FaStar color="#f5c518" /> {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </span>
              <span>
                <FaCalendarAlt color="#aaaaaa" /> Lançamento: {releaseDate}
              </span>
            </div>
            {trailerKey && (
              <div className="trailer-section">
                <h3 className="trailer-title">Trailer</h3>
                <div className="trailer-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                    title="YouTube Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
