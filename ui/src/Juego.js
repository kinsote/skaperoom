import React from 'react';
import HeaderGame from './components/HeaderGame';
import Game1 from './components/Game1';
//import Game2 from './components/Game2'

const juego = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderGame />
            </header>
            <section>                
                 <Game1/>
            </section>
        </div>
    )
}
export default juego