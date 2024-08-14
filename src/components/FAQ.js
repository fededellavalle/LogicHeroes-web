import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq">
            <h2>Preguntas Frecuentes</h2>
            <div
                className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}
                onClick={() => toggleFAQ(0)}
            >
                <h3>¿Qué es LogicHeroes?</h3>
                <div className="faq-answer">
                    <p>LogicHeroes es un juego de aventuras que desafía tu mente con puzzles intrigantes.</p>
                </div>
            </div>
            <div
                className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}
                onClick={() => toggleFAQ(1)}
            >
                <h3>¿Cómo puedo descargar el juego?</h3>
                <div className="faq-answer">
                    <p>Puedes descargar LogicHeroes desde nuestra página oficial o las tiendas de aplicaciones.</p>
                </div>
            </div>
            <div
                className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}
                onClick={() => toggleFAQ(2)}
            >
                <h3>¿Es gratis?</h3>
                <div className="faq-answer">
                    <p>LogicHeroes ofrece una versión gratuita con opciones de compra dentro del juego.</p>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
