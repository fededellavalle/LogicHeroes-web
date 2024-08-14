import React, { useEffect, useRef } from 'react';
import './Features.css';
import featureIcon1 from '../assets/featureImage1.png';
import featureIcon2 from '../assets/featureImage2.png';
import featureIcon3 from '../assets/featureImage3.png';

const Features = () => {
    const featuresRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 } // 10% visible para activar
        );

        const elements = featuresRef.current.querySelectorAll('.feature-item');
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            if (elements) {
                elements.forEach(element => observer.unobserve(element));
            }
        };
    }, []);

    return (
        <section className="features" ref={featuresRef}>
            <h2>Características de LogicHeroes</h2>
            <div className="feature-list">
                <div className="feature-item">
                    <img src={featureIcon1} alt="Feature 1" />
                    <h3>Aventura Épica</h3>
                    <p>Explora mundos emocionantes llenos de desafíos.</p>
                </div>
                <div className="feature-item">
                    <img src={featureIcon2} alt="Feature 2" />
                    <h3>Retos Mentales</h3>
                    <p>Resuelve puzzles que pondrán a prueba tu lógica.</p>
                </div>
                <div className="feature-item">
                    <img src={featureIcon3} alt="Feature 3" />
                    <h3>Actualizaciones Constantes</h3>
                    <p>Contenido nuevo y mejoras regularmente.</p>
                </div>
            </div>
        </section>
    );
}

export default Features;
