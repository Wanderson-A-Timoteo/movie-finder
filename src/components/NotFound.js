import { Link } from "react-router-dom";
import { BiMessageAltError } from "react-icons/bi";

function NotFound() {
  return (
    <main className="not-found-page">
      <BiMessageAltError size={100} color="#f5c518" />
      <h2 className="title">404 - Página não encontrada</h2>
      <p>Houston, temos um problema! A página que você está procurando não existe ou foi movida.</p>
      
      <Link to="/" className="back-home-btn">
        Voltar para o Início
      </Link>
    </main>
  );
}

export default NotFound;
