import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import '../assets/css/EditarUsuario.css';

const Editar = () => {

    const dispatch = useDispatch()
    const token = useSelector(s => s.user && s.user.token)
    const { id } = useParams()
    const { data } = useParams()

    const [user, setUser] = useState()
    const [name, birthday, email, avatar] = useState()

    useEffect(() => {

        console.log('Fetch product, token:', token)

        fetch(`http://localhost:8080/users ${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'product', product: data })
                setUser(data)
            })
            .catch(() => dispatch({ type: 'showModal', modalType: 'error' }))


        setUser({ name, birthday, email, avatar })

    }, [token, dispatch, id, data, name, birthday, email, avatar])


    if (!user) return 'Cargando ...'


    const handleField = field => e => setUser({ ...user, [field]: e.target.value })

    const handleSave = e => {
        e.preventDefault()

        fetch('http://localhost:8080/users', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('Guardado correctamente!')
                
                dispatch({ type: 'user', user: data })
            })
            .catch(() => alert('Error guardando...'))

    }

    return (
        <form onSubmit={handleSave} className="conten-edit">
            <h1 className="tituloedit">Editar usuario {user.id}</h1>
            <div className="edituser" >
                <div >
                    <label className="label-edit">
                        Usuario: <br /><input value={user.name} onChange={handleField('name')} />
                    </label>

                    <label className="label-edit">
                        Cumpleaños: <br /> <input value={user && user.birthday} onChange={handleField('cumpleaños')} />
                    </label>

                    <label className="label-edit">
                        Email: <br /> <input value={user.email} onChange={handleField('email')} />
                    </label>

                    <label className="label-edit">
                        Avatar: <br /> <input value={user.avatar} onChange={handleField('avatar')} />
                    </label>

                    <button className="button-edit">Guardar</button>
                </div>
            </div>


        </form>
    )
}

export default Editar

