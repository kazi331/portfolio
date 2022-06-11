import { Link } from 'react-scroll';
import './navbar.scss';

const Navbar = () => {
    const menuItems = <>
        <li><Link spy={true} smooth={true} offset={-64} duration={500} to="home" >Home</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={500} to="about" >ABOUT</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={500} to="works" >WORKS</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={500} to="blogs" >BLOGS</Link></li>
    </>
    return (
        <nav className="navbar bg-base-100 sticky top-0" id='top'>
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Mobile menu  */}
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">KS</Link>
            </div>
            {/* Desktop menu  */}
            <div className="navbar-end ">
            </div>
            <div className="navbar-end">
                <ul className="hidden lg:flex menu menu-horizontal p-0">
                    {menuItems}
                </ul>
                <button className="btn">RESUME</button>
            </div>
        </nav>
    );
};

export default Navbar;