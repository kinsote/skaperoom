import React from 'react';
import { useDispatch } from 'react-redux'
import logo from '../assets/images/logo.png';
import '../assets/css/Header.css'
import { useHistory } from "react-router-dom";


const HeaderUser = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => dispatch({ type: 'logout' })
    history.push('/')

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
                            <button onClick={handleLogout} className="nav-item" >Logout</button>

                        </li>

                    </ul>

                </nav>
                <div className="clearfix"></div>

            </div>
        </header>
    )
};


export default HeaderUser;