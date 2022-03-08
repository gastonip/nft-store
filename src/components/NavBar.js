import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <>
            <header className='header'>
                <h1>NFT Store</h1>
                <nav className='navbar'>
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">Contacto</a>
                    <CartWidget/>
                </nav>
            </header>
        </>
    )
}

export default NavBar