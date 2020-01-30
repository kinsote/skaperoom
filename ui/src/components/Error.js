import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/Inicio.css'

const Error = () => {
    return (
        <>
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="logo" />
                        <span id="brand"><strong>ZaKin Boss</strong></span>
                    </div>
                </div>
            </header>


            <section id="error" className="main-error">
                <h2 className="error">Página no encontrada</h2>
                <p> La página a la que intentas acceder no se existe en la web </p>
            </section>
        </>
    )
}
export default Error;