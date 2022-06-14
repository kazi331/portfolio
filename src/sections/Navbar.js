import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './navbar.scss';

const Navbar = () => {
    const [hidden, setHidden] = useState(true);
    const menuItems = ['home', 'about', 'works', 'blogs', 'contact']
    return (
        <nav className="flex z-10 flex-wrap justify-between w-full px-4 sticky top-0 select-none bg-gray-900 py-4 text-gray-200 items-center">
            <div className="mr-auto bg-gray-900 text-2xl md:ml-4 uppercase hover:tracking-wide duration-300 "> <NavLink to="/">Shariful <span className='text-[#00ffc6]'>Islam</span></NavLink> </div>

            <div onClick={() => setHidden(!hidden)} className=" md:hidden block">
                {hidden ?
                    <svg className="h-6 w-6 cursor-pointer active:rotate-90 transition-transform duration-300" id="menu-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg> :
                    <svg className='fill-white w-7 h-7 font-bold cursor-pointer active:rotate-90 transition-transform duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path className="uim-primary" d="M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z"></path><path className="uim-primary" d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z"></path></svg>
                }
            </div>

            {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path className="uim-primary" d="M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z"></path><path className="uim-primary" d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z"></path></svg> */}

            <div className={`${hidden && "right-[120vw] opacity-0 md:opacity-100"} scrollbar overflow-x-auto top-12 bg-gray-900 md:border-0 border-b-2  border-gray-800 md:bg-transparent rounded-lg duration-300 absolute md:static md:w-auto w-11/12 px-8 md:mx-0 py-4 md:py-0`} id="menu">
                <ul className="md:flex md:justify-between">

                    {
                        menuItems.map((item, i) => <li key={i}>
                            <Link className="py-2 menu-item px-5 block hover:bg-gray-800 rounded hover:text-[#00ffc6] cursor-pointer uppercase" spy={true} smooth={true} offset={-64} duration={200} to={item} >{item}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;