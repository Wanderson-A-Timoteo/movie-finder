import { FaStar } from "react-icons/fa";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : "https://via.placeholder.com/500x750?text=Sem+Capa";

  return (
    <li className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      
      <div className="movie-info">
        <h3>{movie.title}</h3>
        
        <span className="rating">
          <FaStar color="#f5c518" /> 
          {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </span>
      </div>
    </li>
  );
}

export default MovieCard;
