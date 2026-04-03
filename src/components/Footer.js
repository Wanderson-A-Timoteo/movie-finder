import { FaGithub } from "react-icons/fa";

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desenvolvido por Wanderson de Almeida Timóteo &copy; {anoAtual}</p>
        <a 
          href="https://github.com/Wanderson-A-Timoteo" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Ver perfil no GitHub"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
