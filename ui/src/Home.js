import React from 'react';
import HeaderUser from './components/HeaderUser';
import SelectGame from './components/SelectGame';

const Perfil = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderUser />
            </header>
            <section>
                <SelectGame />
            </section>
        </div>
    )
}
export default Perfil