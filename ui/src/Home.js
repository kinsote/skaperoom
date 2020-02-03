import React from 'react';
import HeaderSelectGame from './components/HeaderSelectGame';
import SelectGame from './components/SelectGame';

const Perfil = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderSelectGame />
            </header>
            <section>
                <SelectGame />
            </section>
        </div>
    )
}
export default Perfil