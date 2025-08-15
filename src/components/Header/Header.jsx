import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#product">Prodotto</a>
        <a href="#contact">Contatti</a>
      </nav>
      <button className="mobile-menu-button">Menu</button>
    </header>
  );
}
