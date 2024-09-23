import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
// import resume from 'public/resume/Front-end developer.pdf';
import { closeIcon, downloadBtn, hamburger } from './SocialIcons';

const Navbar = () => {
    const [hidden, setHidden] = useState(true);
    const [navBg, setNavBg] = useState(false)
    const [shortLogo, setShortLogo] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 600 ? setNavBg(true) : setNavBg(false);
            window.scrollY > 1800 ? setShortLogo(true) : setShortLogo(false)
        })
    }, []);
    // console.log(shortLogo)
    const menuItems = ['home', 'about', 'works', 'blogs', 'contact']
    return (
        <nav className={`flex z-20 flex-wrap justify-between w-full px-4 sticky  select-none backdrop-blur-3xl transition-all duration-500 text-gray-200 items-center  py-3 ${navBg ? 'top-0 bg-gray-900 shadow-lg' : '-top-20'} `}>

            <div className="mr-auto  text-2xl cursor-pointer md:ml-4 uppercase hover:tracking-wide duration-300">
                <div onClick={() => window.scroll(0, 0)}>
                    <span className={`absolute animatetion -translate-y-4 transition-all duration-300  ${shortLogo && '-translate-y-40'} `}>Shariful <span className="text-[#00ffc6]">Islam</span></span>
                    <span className={`absolute animatetion -translate-x-20 -translate-y-4 transition-all duration-300  ${shortLogo && 'translate-x-0 -translate-y-4'}`}>K<span className="text-[#00ffc6]">S.</span></span>
                </div>
            </div>




            {/* hamburger menu icon */}
            <div onClick={() => setHidden(!hidden)} className=" md:hidden block">
                {hidden ? hamburger : closeIcon}
            </div>
            {/* menu items */}
            <div className={`${hidden ? "w-[0px] px-0 overflow-hidden" : 'px-4 w-11/12'} md:px-4 transition-all scrollbar  fixed md:static top-16 bg-[#1E212B] md:bg-transparent md:border-0 border-b-2  border-gray-800 rounded-lg shadow-3xl md:w-auto md:mx-0 py-4 md:py-0`} id="menu">
                <ul className="md:flex md:justify-between gap-1">
                    {menuItems.map((item, i) => <li key={i}>
                        <Link onClick={() => setHidden(!hidden)} activeClass="active" className="py-2 menu-item px-4 block hover:bg-gray-700 rounded hover:text-[#00ffc6] cursor-pointer capitalize mt-1 md:mt-0" spy={true} smooth={true} offset={-64} duration={200} to={item} >{item}</Link>
                    </li>)
                    }
                    <li>
                        <a aria-label="resume" href="resume/Front-end developer.pdf" download="Kazi Shariful Islam - Frontend Developer Resume.pdf" className=" block md:flex items-center  hover:text-[#00ffc6] border-0  py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-1 md:mt-0">
                            <span className="flex"> RESUME {downloadBtn}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;