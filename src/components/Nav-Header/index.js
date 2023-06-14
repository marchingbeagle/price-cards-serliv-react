import NavHeaderButton from "../Nav-header-button";
import "./Nav-header.css";

function NavHeader() {
  return (
    <nav className="nav-header">
      <NavHeaderButton>Home</NavHeaderButton>
      <NavHeaderButton>Planos</NavHeaderButton>
      <NavHeaderButton>Suporte</NavHeaderButton>
      <NavHeaderButton>Contato</NavHeaderButton>
    </nav>
  );
}

export default NavHeader;
