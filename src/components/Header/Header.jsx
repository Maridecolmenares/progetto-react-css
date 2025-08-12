import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#prodotto">Prodotto</a>
        <a href="#contatti">Contatti</a>
      </nav>
      <button className="mobile-menu-button">Menu</button>
    </header>
  );
}
