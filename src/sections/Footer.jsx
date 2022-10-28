import { Link } from 'react-router-dom';
import me from '../resources/me.jpg';
import { instagramIcon, linkedinIcon, messengerIcon, repoIcon, twitterIcon } from './SocialIcons';
const Footer = () => {

  return (
    <footer className="text-gray-400  body-font mt-10">
      <div className="container px-5 py-10 pb-16 mx-auto flex gap-x-6 gap-y-4 justify-center items-center md:flex-row  flex-col">
        <a area-label="back to top" href="#top" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img alt="blog" width={100} height="100" src={me} className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="ml-3 text-xl">Kazi Shariful Islam</span>
        </a>
        <p className="text-sm text-gray-300 sm:ml-6 sm:mt-0 mt-4">© 2022 Phoenix Web —
          <a area-label="Sayem" href="https://facebook.com/kazi331" className="text-gray-300 ml-1 " target="_blank" rel="noopener noreferrer">@Kazi</a>
        </p>
        <span className="flex  mt-1 justify-center sm:justify-start">
          <a area-label="messenger" href="https://facebook.com/kazi331" target="_blank" rel="noreferrer" className="hover:text-[#00ffc6] hover:-translate-y-1 duration-300 text-gray-400">
            {messengerIcon}
          </a>
          <a area-label="twitter" href="https://twitter.com/kazi331" target="_blank" rel="noreferrer" className="hover:text-[#00ffc6] hover:-translate-y-1 duration-300 ml-3 text-gray-400">
            {twitterIcon}
          </a>
          <a area-label="instagram" href="https://instagram.com/phoneixweb.bd" target="_blank" rel="noreferrer" className="hover:text-[#00ffc6] hover:-translate-y-1 duration-300 ml-3 text-gray-400">
            {instagramIcon}
          </a>
          <a area-label="linkedin" href="https://linkedin.com/in/kazi331" target="_blank" rel="noreferrer" className="hover:text-[#00ffc6] hover:-translate-y-1 duration-300 ml-3 text-gray-400">
            {linkedinIcon}
          </a>
          <Link className='hover:text-[#00ffc6] hover:-translate-y-1 duration-300' to="/repos">
            {repoIcon}
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;