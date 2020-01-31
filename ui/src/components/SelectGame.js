import React from 'react';
import { NavLink } from 'react-router-dom'
//import '../assets/css/Home_styles.css'

const SelectGame = () => {

    return(
       <main className="main-select">
            <h1>selecciona juego</h1>
            <NavLink to="/Nv2" className="nav-item" >Game</NavLink>

       </main>
       
    )
}
export default SelectGame