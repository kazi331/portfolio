import './home.scss'


export default function Home() {
    return (
        <div className="mx-auto">
            <section id="hero" className="min-h-screen container flex items-center">
                <div className="w-full md:w-9/12 xl:w-6/12 xl:ml-16 px-4 py-20">
                    <h2>Hi, My name is,</h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold my-6">Kazi Shariful Islam</h1>
                    <h2 className="text-3xl lg:text-5xl">I build web applications with React JS.</h2>
                    <p className="text-lg my-6"> I'm a passionate web developer. It's been two years, I'm working as a web developer.
                        Currently, I'm learning Backend programming. I'm focused on Full Stack Development.
                    </p>
                    <a href="https://google.com" className="btn btn-outline btn-xl mt-4 primary-btn">Download Resume</a>
                </div>
            </section>
            <section id="about">

            </section>
            <section id="works">

            </section>
            <section id="skills">

            </section>
            <section id="blogs">

            </section>
            <section id="contact">

            </section>
        </div>
    )
}
