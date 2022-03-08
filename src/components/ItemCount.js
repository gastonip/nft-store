import React from 'react'
import { useState } from 'react'

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial)

    const aumentarCont = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }
    }

    const disminuirCont = () => {
        if (contador > props.initial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <h3>Camisa tiger</h3>
            <p>Cantidad: {contador}</p>
            <button onClick={aumentarCont}>Incrementar</button>
            <button onClick={disminuirCont}>Disminuir</button>
            <button onClick={props.miOnAdd}>Agregar carrito</button>
        </>
    )
}

export default ItemCount