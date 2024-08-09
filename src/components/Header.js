import React from 'react';
import './Header.css';
import icon from '../assets/logicheroes-icon.png';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={icon} alt="LogicHeroes Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#" className="links">Productos</a></li>
                    <li><a href="#" className="links">Foro</a></li>
                    <li><a href="#" className="links">Idioma</a></li>
                    {/*<a href="#" className="download-button">Descargar Ahora</a>*/}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
