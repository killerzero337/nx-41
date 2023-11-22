import React from 'react'
import Link from 'next/link'
function Menu2() {
    return (
        <nav className="menuTienda">
        <Link href="/blog/entrada1">Entrada1</Link>
        <Link href="/blog/entrada2">Entrada2</Link>
        <Link href="/blog/entrada3">Entrada3</Link>
      </nav>
    )
}

export default Menu2