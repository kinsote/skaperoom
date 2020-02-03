import React, { useState, useEffect } from 'react'

const Timer = ({valor, setValor}) => {
    
    useEffect(() => {
        console.log("Start timer")
        const t = setInterval(() => valor < 0 ? clearInterval(t) : setValor(valor--), 1000)
        
        return () => {
            console.log("Clear timer")
            clearInterval(t)
        }
    }, [])
    return <span className="timer">Contador: {valor}</span>
}

export default Timer;