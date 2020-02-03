import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css'
import { NavLink } from 'react-router-dom'

const HeaderUser = () => {

    const dispatch = useDispatch()
    const handleLogout = () => dispatch({ type: 'logout' })
    const user = useSelector(s => s.user)
    return (

        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logo" />
                    <span id="brand"><strong>ZaKin Boss</strong></span>
                </div>
            </div>
            <nav className="nav">

                <img src={user.avatar} className="nav-avatar" alt="Avatar" />
                <NavLink to="/" onClick={handleLogout} className="nav-item" >Logout</NavLink>
                <NavLink to="/home" id="button-home" className="nav-item">Home</NavLink>
                <NavLink to="/user/edit" id="button-home" className="nav-item">Editar</NavLink>

            </nav>
        </header>
    )
};

export default HeaderUser;
