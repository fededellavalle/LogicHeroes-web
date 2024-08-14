import React from 'react';
import './Gallery.css';
import screenshot1 from '../assets/image1.jpg';
import screenshot2 from '../assets/image2.jpg';
import screenshot3 from '../assets/image3.jpg';

const Gallery = () => {
    return (
        <section className="gallery">
            <h2>Capturas de Pantalla</h2>
            <div className="gallery-images">
                <img src={screenshot1} alt="Captura de pantalla 1" />
                <img src={screenshot2} alt="Captura de pantalla 2" />
                <img src={screenshot3} alt="Captura de pantalla 3" />
            </div>
        </section>
    );
}

export default Gallery;
