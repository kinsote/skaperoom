import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/images/game1.jpg';
import img2 from '../assets/images/game2.jpg';
import img3 from '../assets/images/game3.jpg';
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
                    <img src={img} alt="juego" id="juego2" />
                    <NavLink to="/home/game" className="boton-game" >Scape</NavLink>
                </div>
                <div className="juego">
                    <img src={img3} alt="juego" id="juego3" />
                    <NavLink to="/home/game3" className="boton-game" >Quiz2</NavLink>
                </div>
            </div>
        </div>

    )
}
export default SelectGame