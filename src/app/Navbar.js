import Link from "next/link";

function Navbar() {
    return (
        <nav className="navBar">
            <div>
                <Link href="/">Inicio</Link>
                <Link href="/tienda">Tienda</Link>
                <Link href="/blog">Blog</Link>
            </div>
            <div>
                <Link href="/about">Acerca de...</Link>
                <Link href="/registro">Resgistrarme</Link>
            </div>
        </nav>
    )
}

export default Navbar