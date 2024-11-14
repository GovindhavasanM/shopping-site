import React from 'react'

function Navbar({ openCart, cartCount }) {
    return (
        <nav className='p-4 bg-indigo-500 text-white flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>My Shop</h1>
            <button onClick={openCart} className='bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 active:scale-95'>
                Cart: {cartCount}
            </button>
        </nav>
    )
}

export default Navbar