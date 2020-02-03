import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import '../assets/css/EditarUsuario.css'

const Editar = () => {

    const dispatch = useDispatch()
    const token = useSelector(s => s.user && s.user.token)
    const { id } = useParams()
    const { data } = useParams()

    const [user, setUser] = useState()
    const [name, birthday, email, avatar] = useState()

    useEffect(() => {
        // Aquí haríamos fetch para cargar los datos de este producto
        console.log('Fetch product, token:', token)
        /*
        fetch(process.env.API_HOST + '/product/' + id, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
          .then(res => res.json())
          .then(data => {
            // En este caso, realmente no necesitamos meter el producto en el store,
            // pero a veces puede ser util por si otro componente necesita los datos.
            // En cualquier caso, debemos guardarlo también en un state para ser editado.
            dispatch({ type: 'product', product: data }) // Guardamos en store
            setProduct(data) // Guardamos copia en nuestro state, para editar
          })
          .catch(() => dispatch({ type: 'showModal', modalType: 'error' }))
        */

        setUser({ name, birthday, email, avatar }) // Fake fetch

    }, [token, dispatch, id, data, name, birthday, email, avatar])

    // Mientras cargamos, mostramos un aviso
    if (!user) return 'Cargando ...'

    // Creamos nuestros handlers ...
    const handleField = field => e => setUser({ ...user, [field]: e.target.value })

    const handleSave = e => {
        e.preventDefault()

        // Guardamos los datos mediante otro fetch
        fetch(process.env.API_HOST + '/user/' + id, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('Guardado correctamente!')
                // Si quisiéramos, aquí podríamos actualizarlos también en Redux
                // con otro dispatch. En ese caso, sería bueno que API nos devolviese
                // los datos actualizados, y usar esos, no los de nuestro form.
                // De nuevo, esto no es necesario en este ejemplo, pero podría
                // ser útil en otros casos.
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
                        Cumpleaños: <br /> <input value={user.birthday} onChange={handleField('cumpleaños')} />
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

