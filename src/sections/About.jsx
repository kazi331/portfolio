import { Link } from 'react-scroll';
import me from '../resources/me.jpg';
import './about.scss';
const About = () => {
  const mailToText = "mailto:kazisharifulislam52@gmail.com?subject=Hey%2C%20I%20want%20to%20talk%20to%20you&body=Hey%20Shariful%20Islam%2C%0D%0A...."
  return (
    <div className="container mx-auto">
      <div className="grid">
        {/* about text  */}
        <div className="text">
          <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt='Sayem Khan' className="lg:w-1/2 w-full lg:h-auto md:w-3/5 mx-auto object-cover object-center rounded-lg  about-image" src={me} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 md:w-3/5 mx-auto mt-6 lg:mt-0 text-gray-300">
                  <h2 className="text-sm title-font tracking-widest">About Me</h2>
                  <h1 className="text-3xl title-font font-medium mb-1">Kazi Shariful Islam</h1>
                  {/* social icons  */}
                  <div className="flex mb-4">
                    <span className="flex py-2 space-x-2">
                      <a target="_blank" className="hover:text-[#00ffc6]" rel="noreferrer" href="https://github.com/kazi331">
                        <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 lbJwfL"><path d="M16.24 22a1 1 0 01-1-1v-2.6a2.15 2.15 0 00-.54-1.66 1 1 0 01.61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 00-.67-2.22 2.75 2.75 0 01-.41-2.06 3.71 3.71 0 000-1.41 7.65 7.65 0 00-2.09 1.09 1 1 0 01-.84.15 10.15 10.15 0 00-5.52 0 1 1 0 01-.84-.15 7.4 7.4 0 00-2.11-1.09 3.52 3.52 0 000 1.41 2.84 2.84 0 01-.43 2.08 4.07 4.07 0 00-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 01.82.66 1 1 0 01-.21 1 2.06 2.06 0 00-.55 1.56V21a1 1 0 01-2 0v-.57a6 6 0 01-5.27-2.09 3.9 3.9 0 00-1.16-.88 1 1 0 11.5-1.94 4.93 4.93 0 012 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 01.23-1.58c-2.06-.52-5-2-5-7a6 6 0 011-3.33.85.85 0 00.13-.62 5.69 5.69 0 01.33-3.21 1 1 0 01.63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 015.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 01.63.57 5.71 5.71 0 01.33 3.22.75.75 0 00.11.57 6 6 0 011 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 01.22 1.67V21a1 1 0 01-.94 1z" data-name="Layer 2"></path></svg>
                      </a>
                      {/* mail to link  */}
                      <a className="hover:text-[#00ffc6] " href={mailToText}>
                        <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 lbJwfL"><g data-name="Layer 2"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 01-1-1V7.25l7.4 5.55a1 1 0 00.6.2 1 1 0 00.6-.2L20 7.25V17a1 1 0 01-1 1z" data-name="email"></path></g></svg>
                      </a>
                      <a target="_blank" className="hover:text-[#00ffc6]" rel="noreferrer" href="https://linkedin.com/in/kazi331">
                        <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 lbJwfL"><g data-name="Layer 2"><g data-name="linkedin"><path d="M20 22h-1.67a2 2 0 01-2-2v-5.37a.92.92 0 00-.69-.93.84.84 0 00-.67.19.85.85 0 00-.3.65V20a2 2 0 01-2 2H11a2 2 0 01-2-2v-5.46a6.5 6.5 0 1113 0V20a2 2 0 01-2 2zm-4.5-10.31a3.73 3.73 0 01.47 0 2.91 2.91 0 012.36 2.9V20H20v-5.46a4.5 4.5 0 10-9 0V20h1.67v-5.46a2.85 2.85 0 012.83-2.85zM6 22H4a2 2 0 01-2-2V10a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2zM4 10v10h2V10zM5 7a3 3 0 113-3 3 3 0 01-3 3zm0-4a1 1 0 101 1 1 1 0 00-1-1z"></path></g></g></svg>
                      </a>
                      <a target="_blank" className="hover:text-[#00ffc6]" rel="noreferrer" href="https://twitter.com/dev_kazi">
                        <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 lbJwfL"><g data-name="Layer 2"><path d="M8.51 20h-.08a10.87 10.87 0 01-4.65-1.09A1.38 1.38 0 013 17.47a1.41 1.41 0 011.16-1.18 6.63 6.63 0 002.54-.89 9.49 9.49 0 01-3.51-9.07 1.41 1.41 0 011-1.15 1.35 1.35 0 011.43.41 7.09 7.09 0 004.88 2.75 4.5 4.5 0 011.41-3.1 4.47 4.47 0 016.37.19.7.7 0 00.78.1A1.39 1.39 0 0121 7.13a6.66 6.66 0 01-1.28 2.6A10.79 10.79 0 018.51 20zm0-2h.08a8.79 8.79 0 009.09-8.59 1.32 1.32 0 01.37-.85 5.19 5.19 0 00.62-1 2.56 2.56 0 01-1.91-.85A2.45 2.45 0 0015 6a2.5 2.5 0 00-1.79.69 2.53 2.53 0 00-.72 2.42l.26 1.14-1.17.08a8.3 8.3 0 01-6.54-2.4 7.12 7.12 0 003.73 6.46l.95.54-.63.9a5.62 5.62 0 01-2.68 1.92A8.34 8.34 0 008.5 18zM19 6.65z" data-name="twitter"></path></g></svg>
                      </a>
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
                    <a href="https://github.com/kazi331" className="mr-2 flex text-white bg-indigo-500 bg-opacity-10  border-2 border-indigo-700 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:bg-opacity-40 rounded">Github <svg fill="currentColor" viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 lbJwfL ml-2"><path d="M16.24 22a1 1 0 01-1-1v-2.6a2.15 2.15 0 00-.54-1.66 1 1 0 01.61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 00-.67-2.22 2.75 2.75 0 01-.41-2.06 3.71 3.71 0 000-1.41 7.65 7.65 0 00-2.09 1.09 1 1 0 01-.84.15 10.15 10.15 0 00-5.52 0 1 1 0 01-.84-.15 7.4 7.4 0 00-2.11-1.09 3.52 3.52 0 000 1.41 2.84 2.84 0 01-.43 2.08 4.07 4.07 0 00-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 01.82.66 1 1 0 01-.21 1 2.06 2.06 0 00-.55 1.56V21a1 1 0 01-2 0v-.57a6 6 0 01-5.27-2.09 3.9 3.9 0 00-1.16-.88 1 1 0 11.5-1.94 4.93 4.93 0 012 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 01.23-1.58c-2.06-.52-5-2-5-7a6 6 0 011-3.33.85.85 0 00.13-.62 5.69 5.69 0 01.33-3.21 1 1 0 01.63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 015.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 01.63.57 5.71 5.71 0 01.33 3.22.75.75 0 00.11.57 6 6 0 011 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 01.22 1.67V21a1 1 0 01-.94 1z" data-name="Layer 2"></path></svg> </a>
                    <Link spy={true} smooth={true} offset={-64} duration={500} to="contact" className=" text-white bg-indigo-500 bg-opacity-10 cursor-pointer border-2 border-indigo-700 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:bg-opacity-40 rounded">Contact</Link>
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