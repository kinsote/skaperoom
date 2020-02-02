import React  from 'react'; //, { useState, useEffect }
import { useDispatch, useSelector } from 'react-redux';// 
import { NavLink } from 'react-router-dom';
import logo from './assets/images/logo.png';
import './assets/css/Header.css';
import './assets/css/User.css';
//import { useParams } from 'react-router-dom'

const User = () => {
    const dispatch = useDispatch()
    const handleLogout = () => dispatch({ type: 'logout' })
    // const { id } = useParams()

    // const [ user, setUser ] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:8080/users/' + id)
    //         .then(r => r.json())
    //         .then(data => setUser(data))
    // }, [id])

    // if (!user) return 'Loading...'

   
    const user = useSelector(s=>s.user)
    console.log("USER DATA", user)    

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
                    
                    <div className="avatar"> <img src={user.avatar} alt="Avatar" /></div>

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


// const User = () => {
//     const dispatch = useDispatch()
//     const handleLogout = () => dispatch({ type: 'logout' })
//     const token = useSelector(s => s.user && s.user.token)
//     const { id } = useParams()
//     let { data } = useParams()
//     const [user, setUser] = useState()
//     const [name, birthday, email, avatar] = useState()

//     useEffect(() => {

//         fetch(process.res.API_HOST + '/user/' + id, {
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 dispatch({ type: 'user', user: data })
//                 setUser(data)
//             })
//             .catch(() => alert('error'))//dispatch({ type: 'showModal', modalType: 'error' }))
//         setUser({ name, birthday, email, avatar })
//     }, [token, dispatch, id, data, name, birthday, email, avatar])

//     if (!user) return 'Cargando ...'

