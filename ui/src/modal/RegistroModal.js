import React, { useState } from 'react'; 
import { useHistory } from "react-router-dom";
import '../assets/css/Modals.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const useFormField = () => {
    const [value, setValue] = useState('')
    return [value, e => setValue(e.target.value)]
}

const RegistroModal = () => {
    const dispatch = useDispatch()
    const registro = (user) => dispatch({ type: 'registro', user })

    const [name, setName] = useFormField()
    const [birthday, setBirthday] = useFormField()
    const [password, setPassword] = useFormField()
    const [email, setEmail] = useFormField()
    const [avatar, setAvatar] = useFormField()

    const history = useHistory()
    const [isError, setError] = useState(false)
    const handleClose = () => dispatch({ type: 'hideModal' })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { name, password, birthday, email, avatar }
        //console.log('SUBMIT', user);

        setError(false)
        try {
            const ret = await fetch('http://localhost:8080/registro', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const data = await ret.json();
            console.log('DATA', data);
            localStorage.setItem('user', JSON.stringify(data))
        
            history.push(`/home`)
            handleClose()

            if (data.success) {
                console.log('OK, USUARIO GUARDADO');

            } else {
                setError(true)
            }
            
        } catch (err) {
            alert('El usuario ya existe');
            console.warn('Error:', err)
            console.log('entra')
            setError(true)
        }

    }
    registro({
        name,
        birthday,
        email,
        avatar
    })


    return (
        <form className="contain" onSubmit={handleSubmit}>

            <div className="contain-registro">

                <h1>Registro</h1>

                <div className="form-modal" >
                    <Link to="/" className="btn-close-popup" onClick={handleClose}>X</Link>

                    <label>
                        Nombre: <br /><input name="name" required value={name} onChange={setName} placeholder="Nombre de usuario" />
                    </label>

                    <label>
                        Contraseña: <br /><input name="password" type="password" required value={password} onChange={setPassword} placeholder="Contraseña" />
                    </label>

                    <label>
                        F.nacimiento: <br /><input name="birthday" type="date" required value={birthday} onChange={setBirthday} placeholder="Fecha de nacimiento" />
                    </label>

                    <label>
                        Email: <br /><input name="email" type="email" required value={email} onChange={setEmail} placeholder="Correo" />
                    </label>
                    <label>
                        Avatar:<br /><input name="avatar" type="url" required value={avatar} onChange={setAvatar} placeholder="Avatar" />
                    </label>

                    <button type="submit" className="button-modal" > Registrarse </button>

                </div>
            </div>
            {isError && <div>Error, please try again</div>}
        </form>
    )

}

export default RegistroModal;