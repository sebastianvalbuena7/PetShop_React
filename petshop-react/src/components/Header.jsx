import { Link, useLocation } from "react-router-dom"

export const Header = () => {
    const location = useLocation()
    const { pathname } = location
    return (
        <header className="flex flex-col md:flex-row md:justify-around md:h-auto items-center h-auto mb-16 gap-8">
            <div className="flex justify-center my-8">
                <img className="rounded-xl w-44" src="/public/petshop logo dilan.png" alt="Logo Petshop" />
            </div>

            <div>
                <nav className="flex justify-center gap-4">
                    <Link to='/' className={`${pathname === '/' ? 'text-violet-500' : 'text-black'} font-bold text-xl`}>Home</Link>
                    <Link to='/shop' className={`${pathname === '/shop' ? 'text-violet-500' : 'text-black'} font-bold text-xl`}>Shop</Link>
                    <Link to='/blog' className={`${pathname === '/blog' ? 'text-violet-500' : 'text-black'} font-bold text-xl`}>Blog</Link>
                    <Link to='/contact' className={`${pathname === '/contact' ? 'text-violet-500' : 'text-black'} font-bold text-xl`}>Contact</Link>
                </nav>
            </div>

            <div>
                <Link to='/carrito'><i className='bx bxs-cart bx-lg text-violet-500'></i></Link>
            </div>
        </header>
    )
}