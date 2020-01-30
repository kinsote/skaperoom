import React from 'react';
import { useDispatch } from 'react-redux'
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css'
import { NavLink } from 'react-router-dom'

const HeaderUser = () => {

    const dispatch = useDispatch()
    const handleLogout = () => dispatch({ type: 'logout' })
    const userData = localStorage.getItem('userData');
    const user = JSON.parse(userData);

    return (

        <header id="header">
            <div className="center">
                <div id="logo">
                    <img src={logo} className="app-logo" alt="logo" />
                    <span id="brand"><strong>ZaKin Boss</strong></span>
                </div>

                <nav  className="nav">
                    <img src={user.avatar} className="nav-avatar" alt="Avatar" />

                    <NavLink to="/" onClick={handleLogout} className="nav-item" >Logout</NavLink>

                    <NavLink to="/user" className="nav-item" >{user.name}</NavLink>
                </nav>
                <div className="clearfix"></div>

            </div>
        </header>
    )
};

export default HeaderUser;
