import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    const miOnAdd = () => {}
    return (
        <>
            <h3>{props.greeting}</h3>
            <ItemCount stock={5} initial={1} onAdd={miOnAdd}/>
        </>


    )
}

export default ItemListContainer