import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css'
import { NavLink } from 'react-router-dom'

const HeaderSelectGame = () => {

    const dispatch = useDispatch()
    const handleLogout = () => {
        console.log('LOGOUT')
        localStorage.removeItem('user')
        dispatch({ type: 'logout' })
    } 
    const user = useSelector(s=>s.user)
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

export default HeaderSelectGame;
