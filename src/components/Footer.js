import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3>LogicHeroes</h3>
                    <p>El juego de aventuras y puzzles más emocionante.</p>
                    <a href="#" className="download-button">
                        <i className="bi bi-download"></i> Descargar Ahora
                    </a>
                </div>
                <div className="footer-column">
                    <h3>Enlaces Útiles</h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Características</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 LogicHeroes. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
