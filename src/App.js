import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Features/>
            {/* Aquí puedes agregar más secciones como la de descargas */}
        </div>
    );
}

export default App;
