import { Link } from 'react-scroll';

const Navbar = () => {
    const menuItems = <>
        <li><Link spy={true} smooth={true} offset={-64} duration={200} to="hero" >Home</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={200} to="about" >ABOUT</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={200} to="works" >WORKS</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={200} to="skills" >SKILLS</Link></li>
        <li><Link spy={true} smooth={true} offset={-64} duration={200} to="blogs" >BLOGS</Link></li>

    </>
    return (
        <nav className="navbar bg-gray-900 bg-opacity-50 sticky top-0 backdrop-blur-sm" id='navbar'>
            <div className="container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Mobile menu  */}
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">KS</Link>
                </div>
                {/* Desktop menu  */}
                <div className="navbar-end">
                    <ul className="hidden lg:flex menu menu-horizontal p-0">
                        {menuItems}
                    <button className="hidden lg:block btn btn-outline primary-btn">RESUME</button>
                    </ul>
                    <button className="block lg:hidden btn btn-outline primary-btn">RESUME</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;