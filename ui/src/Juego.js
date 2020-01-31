import React from 'react';
import HeaderGame from './components/HeaderGame';
import Nv2 from './nv2/components/Nv2';

const juego = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderGame />
            </header>
            <section>
                <Nv2 />
            </section>
        </div>
    )
}
export default juego