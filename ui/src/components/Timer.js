import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [valor, setValor] = useState(0)
    useEffect(() => {
        console.log("Start timer")
        const t = setInterval(() => setValor(v => v >= 0 ? v + 1 : 0), 1000)
        return () => {
            console.log("Clear timer", t)

            //Obtener el valoir 
            //oibterne el user del localStorage
            //Obtener ekl valor del toimer
            //enviar el post a /ranking (email, tiempo)

            clearInterval(t)
        }
    }, [])
    return <span className="timer">Contador: {valor}</span>
}

export default Timer;