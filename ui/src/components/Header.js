import React from 'react';
import logo from '../assets/images/logo.png';
import {useDispatch } from 'react-redux'
import Modals from '../modal/Modals'


const Header = () => {

    const dispatch = useDispatch()
    const handleRegistro = () => dispatch({ type: 'showModal', modalType: 'registro' })
    const handleLogin = () => dispatch({ type: 'showModal', modalType: 'login' })

    return (

        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logo" />
                    <span id="brand"><strong>ZaKin Boss</strong></span>
                </div>
                
                <nav id="menu">
                    <ul>
                        <li>
                            <button onClick={handleRegistro} className="nav-item" >Registro</button>
                        </li>
                        <li>
                            <button onClick={handleLogin} className="nav-item" >Login</button>
                        </li>
                    </ul>                   
                    <Modals />
                </nav>
                <div className="clearfix"></div>
                
            </div>
        </header>
    )
};
export default Header;


