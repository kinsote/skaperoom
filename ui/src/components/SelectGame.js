import React from 'react';
import { NavLink } from 'react-router-dom';
import {img} from '../assets/images/game1.jpg';
import '../assets/css/Inicio.css';



const SelectGame = () => {

    return(
       <div className="main-select">
            <h1 className="select-game">selecciona juego</h1>

            <img src={img} alt="juego1" className="juego1" />

            <NavLink to="/home/game" className="boton-game" >Game</NavLink>

       </div>
       
    )
}
export default SelectGame