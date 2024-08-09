import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Hero = () => {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Cambiar imagen automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            goToNextImage();
        }, 5000);

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="hero">
            <div className="content">
                <h1>¡Descubre LogicHeroes!</h1>
                <p>El juego de aventuras y puzzles más emocionante.</p>
                <a href="#" className="cta-button"><i className="bi bi-download"></i> Descarga Ahora</a>
            </div>
            <div className="media">
                <img
                    src={images[currentIndex]}
                    alt={`Vista previa ${currentIndex + 1} de LogicHeroes`}
                    className="carousel-image"
                />
                <span className="new-badge">¡Nuevo!</span>
                <div className="controls">
                    <button onClick={goToPreviousImage} className="prev-button">←</button>
                    <button onClick={goToNextImage} className="next-button">→</button>
                </div>
                <div className="dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
