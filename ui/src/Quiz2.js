import React from 'react';
import HeaderGame from './components/HeaderGame';
import Quiz2 from './Quiz2/Fotoquiz';

const Gameq2 = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderGame />
            </header>
            <section>
                <Quiz2 />
            </section>
        </div>
    )
}
export default Gameq2