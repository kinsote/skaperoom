
import React from 'react'
import Header from './components/Header';
import Slider from './components/Slider';
import './assets/css/Inicio.css';


const Inicio = () => {
  return (

    <div className="home">
      <header className="header">
        <Header />
      </header>
      <section>
        <Slider />
      </section>
    </div>

  )
}

export default Inicio
