import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import '../assets/css/Modals.css';
import { Link } from 'react-router-dom';

const LoginModal = () => {
  const dispatch = useDispatch()
  const Login = (user) => dispatch({ type: 'login', user })               
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const [isError, setError] = useState(false)

  const handleClose = () => dispatch({ type: 'hideModal' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = { name, password }
    setError(false)
    try {
      const ret = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
      const data = await ret.json()

      localStorage.setItem('token', data.token)
      handleClose()
      history.push(`/home`)

      if (data.success) {
        // ok! todo bien
      } else {
        // setError(true)
      }
    } catch (err) {
      console.warn('Error:', err)
      setError(true)
    }
    Login({
      name
    })
  }

  return (

    <form className="container" onSubmit={handleSubmit}>

      <div className="container-login">

        <h1>login</h1>

        <div className="form-modal" >
          <Link to="/" className="btn-close-popup" onClick={handleClose}>X</Link>

          <label>
            Username: <br /><input name="name" required value={name} onChange={e => setName(e.target.value)} placeholder="Nombre de usuario" />
          </label><br />
          <label>
            Password: <br /><input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
          </label><br />
          <button className="button-modal">Log in!</button>

        </div>
      </div>
      {isError && <div>Error, please try again</div>}
    </form>

  )
}

export default LoginModal

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { useHistory } from "react-router-dom";
// import '../assets/css/Modals.css';
// import { Link } from 'react-router-dom';


// const Login = () => {
//   const dispatch = useDispatch()
//   const login = (user) => dispatch({ type: 'login', user })
//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const history = useHistory()
//   const [isError, setError] = useState(false)
//   const handleClose = () => dispatch({ type: 'hideModal' })

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     try {
//       const ret = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         body: JSON.stringify(),
//         headers: {
//         'Content-Type': 'application/json',
//           // 'Authorization': localStorage.getItem('token')
//         }
//       })
//       const data = await ret.json()

//       //localStorage.setItem('token', data.token)
//       handleClose()
//       history.push(`/home`)

//       if (data.success) {
//         // ok! todo bien
//       } else {
//         // setError(true)
//       }
//     } catch (err) {
//       console.warn('Error:', err)
//       setError(true)
//     }
//     // Aquí haríamos fetch para hacer login, y
//     // obtendríamos los datos del user y un token...
//     console.log('Login:', name, password)
//     login({
//       name,
     
//     })
//   }

//   return (
//     <form className="container" onSubmit={handleSubmit}>

//       <div className="container-login">

//         <h1>login</h1>

//         <div className="form-modal" >
//           <Link to="/" className="btn-close-popup" onClick={handleClose}>X</Link>

//           <label>
//             Username: <br /><input name="name" required value={name} onChange={e => setName(e.target.value)} placeholder="Nombre de usuario" />
//           </label><br />
//           <label>
//             Password: <br /><input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" />
//           </label><br />           <button className="button-modal">Log in!</button>

//         </div>
//       </div>
//       {isError && <div>Error, please try again</div>}
//     </form>
//   )
// }

// export default Login



