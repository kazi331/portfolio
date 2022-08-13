import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { closeIcon, downloadBtn, hamburger } from './SocialIcons';
import './navbar.scss';
import resume from '../resources/Kazi Shariful Islam - Junior React Developer resume.pdf'

const Navbar = () => {
    const [hidden, setHidden] = useState(true);
    const [navBg, setNavBg] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
           window.scrollY > 600 ? setNavBg('bg-gray-700 bg-opacity-20 shadow-lg py-3') : setNavBg(false)
        })
    });

    const menuItems = ['home', 'about', 'works', 'blogs', 'contact']
    return (
        <nav className={`flex z-20 flex-wrap justify-between w-full px-4 sticky ${navBg ? 'top-0' : '-top-20'} select-none backdrop-blur-3xl transition-all duration-500 text-gray-200 items-center ${navBg ? navBg : 'py-4'}`}>
            <div className="mr-auto  text-2xl cursor-pointer md:ml-4 uppercase hover:tracking-wide duration-300 "> <Link to="home">Shariful <span className='text-[#00ffc6]'>Islam</span></Link> </div>

            {/* hamburger menu icon */}
            <div onClick={() => setHidden(!hidden)} className=" md:hidden block">
                {hidden ? hamburger : closeIcon}
            </div>
            {/* menu items */}
            <div className={`${hidden ? "w-[0px] px-0 overflow-hidden" : 'px-4 w-11/12'} md:px-4 transition-all scrollbar  fixed md:static top-16 bg-[#1E212B] md:bg-transparent md:border-0 border-b-2  border-gray-800 rounded-lg shadow-3xl md:w-auto md:mx-0 py-4 md:py-0`} id="menu">
                <ul className="md:flex md:justify-between gap-1">

                    {menuItems.map((item, i) => <li key={i}>
                        <Link onClick={() => setHidden(!hidden)} activeClass="active" className=" py-2 menu-item px-4 block hover:bg-gray-700 rounded hover:text-[#00ffc6] cursor-pointer uppercase mt-1 md:mt-0" spy={true} smooth={true} offset={-64} duration={200} to={item} >{item}</Link>
                    </li>)
                    }
                    <a href={resume} download className=" block md:flex items-center  hover:text-[#00ffc6] border-0  py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-1 md:mt-0">
                        <span className="flex"> RESUME {downloadBtn}</span>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;