import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';
import resume from '../resources/Kazi Shariful Islam - Junior React Developer resume.pdf'

const Navbar = () => {
    const [hidden, setHidden] = useState(true);
    const [navBg, setNavBg] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 800 ? setNavBg('bg-gray-700 bg-opacity-20 shadow-lg py-3') : setNavBg(false)
        })
    });

    const menuItems = ['home', 'about', 'works', 'blogs', 'contact']
    return (
        <nav className={`flex z-20 flex-wrap justify-between w-full px-4 sticky ${navBg ? 'top-0' : '-top-20'} select-none backdrop-blur-3xl transition-all duration-300 text-gray-200 items-center ${navBg ? navBg : 'py-4'}`}>
            <div className="mr-auto  text-2xl cursor-pointer md:ml-4 uppercase hover:tracking-wide duration-300 "> <Link to="home">Shariful <span className='text-[#00ffc6]'>Islam</span></Link> </div>

            <div onClick={() => setHidden(!hidden)} className=" md:hidden block">
                {hidden ?
                    <svg className="h-6 w-6 cursor-pointer active:rotate-90 transition-transform duration-300" id="menu-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg> :
                    <svg className='fill-white w-7 h-7 font-bold cursor-pointer active:rotate-90 transition-transform duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em"><path className="uim-primary" d="M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z"></path><path className="uim-primary" d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z"></path></svg>
                }
            </div>

            <div className={`${hidden && "right-[120vw] opacity-0 md:opacity-100"} scrollbar overflow-x-auto top-12 bg-[#1E212B] md:bg-transparent md:border-0 border-b-2  border-gray-800 rounded-lg duration-300 absolute md:static md:w-auto w-11/12 px-8 md:mx-0 py-4 md:py-0`} id="menu">
                <ul className="md:flex md:justify-between gap-1">

                    {
                        menuItems.map((item, i) => <li key={i}>
                            <Link onClick={() => setHidden(!hidden)} activeClass="active" className="py-2 menu-item px-4 block hover:bg-gray-700 rounded hover:text-[#00ffc6] cursor-pointer uppercase" spy={true} smooth={true} offset={-64} duration={200} to={item} >{item}</Link>
                        </li>)

                    }
                    <a href={resume} download className="inline-flex items-center  border-0  py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">RESUME
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 ml-1' viewBox="0 0 21 21"><g fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"><path d="m3.5 7.5 4 4 4-4" /><path d="m7.5.5v11" /><path d="m.5 14.5h14" /></g></svg>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;