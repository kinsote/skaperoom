import React from 'react';
import HeaderGame from './components/HeaderGame';
import Editar from './components/Editar';


const Edit = () => {

    return (
        <div className="home">
            <header className="header">
                <HeaderGame />
            </header>
            <section>
                <Editar />                
            </section>
        </div>
    )
}
export default Edit;