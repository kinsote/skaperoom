import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/game1.jpg';
import img2 from '../assets/images/game2.jpg';
import '../assets/css/Inicio.css';



const SelectGame = () => {

    return (
        <div className="main-select">
            <h1 className="select-game">selecciona juego</h1>

            <div className="conten-game">

                <div className="juego">
                    <img src={img2} alt="juego" id="juego1" />
                    <NavLink to="/home/game2" className="boton-game" >Quiz</NavLink>
                </div>
                <div className="juego">
                    <img src='https://mouse.latercera.com/wp-content/uploads/2017/09/it-casa.jpg' alt="juego" id="juego2" />
                    <NavLink to="/home/game" className="boton-game" >Scape</NavLink>
                </div>
                <div className="juego">
                    <img src={img} alt="juego" id="juego3" />
                    <NavLink to="/home/game1" className="boton-game" >Game</NavLink>
                </div>
            </div>
        </div>

    )
}
export default SelectGame