import { FaTimes, FaStar, FaCalendarAlt } from "react-icons/fa";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=Sem+Capa";

  const dataLancamento = movie.release_date 
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
                <FaCalendarAlt color="#aaaaaa" /> Lançamento: {dataLancamento}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
