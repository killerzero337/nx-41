import React from 'react'
import Link from 'next/link'
function Menu() {
    return (
        <nav className="menuTienda">
        <Link href="/tienda/decoracion">Decoracion</Link>
        <Link href="/tienda/electronica">electronica</Link>
        <Link href="/tienda/libros">libros</Link>
        <Link href="/tienda/mobiliario">mobiliario</Link>
      </nav>
    )
}

export default Menu