import React from 'react';
import HeaderGame from './components/HeaderGame';
import MainQuiz from './Quiz1/MainQuiz';

const Game1 = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderGame />
            </header>
            <section>
                <MainQuiz />
            </section>
        </div>
    )
}
export default Game1