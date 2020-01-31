import React from 'react';
import { useDispatch, useSelector } from 'react-redux';//
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css';
import '../assets/css/User.css';

const User = () => {

   
    const user = useSelector(s=>s.user)
    console.log("USER DATA", user)

    const dispatch = useDispatch()
    const handleLogout = () => dispatch({ type: 'logout' })

    return (

        <>
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

            <div className="contenedor">
                <h2>Tu perfil:</h2>

                <div className="grid-container">
                    
                    <div className="avatar">Avatar: <img src={user.avatar} alt="Avatar" /></div>

                    <span className="datos">
                        <div className="user">Usuario: {user.name}</div>
                        <div className="cumpleaños">Cumpleaños: {user.birthday}</div>
                        <div className="email">Email: {user.email}</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default User