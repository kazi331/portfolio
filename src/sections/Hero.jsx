import '../animate-title.css';
// import resume from '../resources/Kazi Shariful Islam - Junior React Developer resume.pdf';
const Hero = () => {
    return (
        <div className="hero w-full md:w-9/12 xl:w-8/12 px-4 py-24 pb-20" >
            <h2 className='text-accent'>Hi, my name is</h2>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold my-6" data-text="Kazi Shariful Islam">
                <span className="hero-text">Kazi Shariful Islam</span>

            </h1>
            <h2 className="text-3xl lg:text-5xl">I build web applications with React.</h2>
            <p className="text-lg my-6 mb-12"> I'm a passionate web developer. It's been two years, I'm working as a web developer.
                Currently, I'm learning Backend programming. I'm focused on Full Stack Development.
            </p>
            <a aria-label="Download Resume"
                href="/resume/Kazi Shariful Islam - Frontend Developer.pdf"
                download="Kazi Shariful Islam - Frontend Developer.pdf"
                target="_blank" rel='noreferrer'
                className=" text-white bg-accent bg-opacity-5  border-[1px] border-[#00ffc881] p-3 focus:outline-none hover:bg-accent hover:bg-opacity-10 rounded">Download Resume</a>
        </div>
    );
};

export default Hero;