import { Link } from 'react-scroll';
import me from '../resources/me2.png';
import { githubIcon, GithubLink, linkedinIcon, mailIcon, whatsappIcon } from './SocialIcons';


const mailToText = "mailto:kazisharifulislam52@gmail.com?subject=Hey%2C%20I%20want%20to%20talk%20to%20you&body=Hey%20Shariful%20Islam%2C%0D%0A...."
export const whatsappLink = "https://api.whatsapp.com/send/?phone=+8801612178331&text=I%27m+interested+to+talk+with+you+about+your+portfolio&app_absent=0"
const About = () => {
  return (
    <div className="container mx-auto" >
      <div className="grid">
        {/* about text  */}
        <div className="text">
          <section className="text-gray-400  body-font overflow-hidden" >
            <div className="container  px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt='Sayem Khan' width="300" height="300" className="lg:w-1/2 w-full lg:h-auto md:w-3/5 mx-auto object-cover object-top aspect-square rounded-lg  about-image hover:scale-105 duration-300 hover:-rotate-2" src={me} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 md:w-3/5 mx-auto mt-6 lg:mt-0 text-gray-300">
                  <h2 className="text-sm title-font tracking-widest">About Me</h2>
                  <h1 className="text-3xl title-font font-medium mb-1">Kazi Shariful Islam</h1>
                  {/* social icons  */}
                  <div className="flex mb-4 about-icons">
                    <span className="flex py-2 space-x-2">
                      <a aria-label="github" target="_blank" className="hover:text-accent hover:-translate-y-1 duration-300" rel="noreferrer" href="https://github.com/kazi331">{githubIcon}</a>
                      <a aria-label="mail" target="_blank" className="hover:text-accent hover:-translate-y-1 duration-300" rel="noreferrer" href={mailToText}>{mailIcon} </a>
                      <a aria-label="linkedin" target="_blank" className="hover:text-accent hover:-translate-y-1 duration-300" rel="noreferrer" href="https://linkedin.com/in/kazi331">{linkedinIcon} </a>
                      <a aria-label="whatsapp" target="_blank" className="hover:text-accent hover:-translate-y-1 duration-300" rel="noreferrer" href={whatsappLink}>{whatsappIcon} </a>
                    </span>
                  </div>
                  {/* about text  */}
                  <p className="leading-relaxed">
                    Hey, this is Kazi from Bangladesh, a passionate web developer who loves to take challenges and do for the future.
                    I always try to be up to date with the newer technology. Right now, my skill set is HTML5, CSS3, Javascript <span className='fav-color'>(ES6)</span>, React 18.
                    I know a little bit of Node JS with Express JS and MongoDB for database.
                    I never lag behind to grab the new technology. I'm keen of learning new things and web is my learning path.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a aria-label="github" href="https://github.com/kazi331" className="mr-2 flex text-white bg-accent/10 bg-opacity-10  border-2 border-accent/40 py-2 px-6 focus:outline-none hover:bg-accent/20 hover:bg-opacity-40 rounded"> <GithubLink>Github</GithubLink> </a>
                    <Link spy={true} smooth={true} offset={-64} duration={500} to="contact" className=" text-white bg-accent/10 bg-opacity-10 cursor-pointer border-2 border-accent/40 py-2 px-6 focus:outline-none hover:bg-accent/20 hover:bg-opacity-40 rounded">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;