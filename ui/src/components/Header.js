import React from 'react';
import logo from '../assets/images/logo.png';
import { useDispatch } from 'react-redux'
import Modals from '../modal/Modals'
import '../assets/css/Header.css'


const Header = () => {

    const dispatch = useDispatch()
    const handleRegistro = () => dispatch({ type: 'showModal', modalType: 'registro' })
    const handleLogin = () => dispatch({ type: 'showModal', modalType: 'login' })

    return (

        <header id="header">

            <div id="logo">
                <img src={logo} className="app-logo" alt="logo" />
                <span id="brand"><strong>ZaKin Boss</strong></span>
            </div>

            <nav className="nav">

                <button onClick={handleRegistro} className=" nav-item">Registro</button>

                <button onClick={handleLogin} className=" nav-item">Login</button>

            </nav>

            <Modals />

            <div className="clearfix"></div>

        </header>
    )
};
export default Header;


