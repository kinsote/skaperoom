import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/User.css';


const UserData = () => {
    const user = useSelector(s => s.user)
    console.log("USER DATA", user)

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





// fetch(`'http://localhost:8080/users/'`)
// .then(r => r.json())


// const { id } = useParams()

// const [user, setUser] = useState()
// useEffect(() => {
// User(id).then(u => setUser(u))
// }, [id])








//import { useParams } from 'react-router-dom'


   // const { id } = useParams()

    // const [ user, setUser ] = useState()
    // useEffect(() => {
    //     fetch('http://localhost:8080/users/' + id)
    //         .then(r => r.json())
    //         .then(data => setUser(data))
    // }, [id])

    // if (!user) return 'Loading...'


