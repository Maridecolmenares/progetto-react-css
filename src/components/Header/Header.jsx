import { useState } from "react";
import "./Header.css";
import headerLogo from '../../assets/images/Logo_azienda_2.png'; // шлях відносно файлу

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        
        {/* Лого */}
        <div className="header__logo">
          <img src={headerLogo} alt="Logo" className="logo__image" />
          <a  href="#"><span className="logo__title">Sabor del Mar</span></a>
        </div>

        {/* Навігація */}
        <nav className={`header__nav ${isOpen ? "open" : ""}`}>
          <ul className="menu__list">
            <li className="menu__item"><a href="#home">Home</a></li>
            <li className="menu__item"><a href="#about">Chi siamo</a></li>
            <li className="menu__item"><a href="#product">Menu</a></li>
            <li className="menu__item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Кнопки справа */}
        <div className="header__actions">
          <a href="#contact" className="btn_header">Contattaci</a>
          <button
            className={`burger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
