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
  const [email] = useState('')
  const [avatar] = useState('')
  const [birthday] = useState('')



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
        }
      })

      const data = await ret.json()
      console.log("USER LOGUIN", data);

      localStorage.setItem('user', JSON.stringify(data))

      dispatch({ type: 'registro', user: data })

      handleClose()
      history.push(`/home`)

      if (data.success) {
        // ok! todo bien        
        //data.userData       
      } else {
        // setError(true)
      }
    } catch (err) {
      alert('El usuario no esta registrado')
      console.warn('Error:', err)
      setError(true)
    }

    Login({
      name,
      avatar,
      email,
      birthday
    })
  }

  return (

    <form className="contain" onSubmit={handleSubmit}>

      <div className="contain-login">

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




