import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";

function Header() {
  const [searchEntry, setSearchEntry] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!searchEntry.trim()) return;

    navigate(`/search/${searchEntry}`);
    setSearchEntry("");
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <BiSolidCameraMovie size={36} color="#f5c518" />
        <h1>Movie Finder</h1>
      </Link>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text" 
          placeholder="Search for a movie..." 
          value={searchEntry}
          onChange={(e) => setSearchEntry(e.target.value)}
        />
        <button type="submit" disabled={!searchEntry.trim()}>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}

export default Header;
