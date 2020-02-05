import React from 'react';
import '../assets/css/User.css';


const UserData = () => {
    
    const user = JSON.parse(localStorage.getItem('user')) 
    //console.log("USER DATA", user)

    return (

        <div className="contenedor">
            <h2>Tu perfil:</h2>

            <div className="grid-container">

                <div className="avatar"> <img src={user.avatar} alt="Avatar" /></div>

                <span className="datos">
                    <div className="user">Usuario: {user.name}</div>
                    <div className="cumpleaños">Cumpleaños: {user.birthday}</div>
                    <div className="email">Email: {user.email}</div>
                </span>
            </div>
        </div>

    )
}

export default UserData

