import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = testimonialsRef.current.querySelectorAll('.testimonial-item');
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
        <section className="testimonials" ref={testimonialsRef}>
            <h2>Lo que dicen nuestros jugadores</h2>
            <div className="testimonial-list">
                <div className="testimonial-item">
                    <p>"LogicHeroes es uno de los juegos donde mas se aprende y es absolutamente adictivo."</p>
                    <h4>- Universidad Blas Pascal</h4>
                </div>
                <div className="testimonial-item">
                    <p>"Este juego ha sido creado para ayudar a todo tipo de gente a aprender sobre la logica y  fortalecer el pensamiento"</p>
                    <h4>- Ministerio de Educación</h4>
                </div>
                <div className="testimonial-item">
                    <p>"Felicito a los chicos por hacer este increible juego, mas que orgulloso de ellos y de que sean argentinos"</p>
                    <h4>- Javier Milei</h4>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
