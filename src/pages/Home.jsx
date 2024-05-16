import About from '../sections/About'
import Blogs from '../sections/Blogs'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero.jsx'
import Works from '../sections/Works'

export default function Home() {
    return (
        <div className="w-full mx-auto">
            <section id="home" className="min-h-screen container flex items-center mx-auto text-gray-300">
               <Hero />
            </section>
            <section id="about" className='container mx-auto'>
                <About />
            </section>
            <section id="works" className='container mx-auto'>
                <Works />
            </section>
            <section id="skills">

            </section>
            <section id="blogs">
                <Blogs />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    )
}
