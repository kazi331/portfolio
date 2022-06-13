import About from '../sections/About'
import Footer from '../sections/Footer'
import './home.scss'


export default function Home() {
    return (
        <div className="w-full mx-auto">
            <section id="hero" className="min-h-screen container flex items-center mx-auto">
                <div className="w-full md:w-9/12 xl:w-8/12 px-4 pb-20">
                    <h2>Hi, My name is,</h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold my-6">Kazi Shariful Islam</h1>
                    <h2 className="text-3xl lg:text-5xl">I build web applications with React.</h2>
                    <p className="text-lg my-6"> I'm a passionate web developer. It's been two years, I'm working as a web developer.
                        Currently, I'm learning Backend programming. I'm focused on Full Stack Development.
                    </p>
                    <a href="#!" className="btn btn-outline btn-xl mt-4 primary-btn">Download Resume</a>
                </div>
            </section>
            <section id="about" className='container mx-auto'>
                <About />
            </section>
            <section id="works">

            </section>
            <section id="skills">

            </section>
            <section id="blogs">

            </section>
            <section id="contact">

            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    )
}
