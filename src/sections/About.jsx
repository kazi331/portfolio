import { Link } from 'react-scroll';
import me from '../resources/me.jpg';
const About = () => {
    return (
        <div className="container mx-auto">
            <div className="grid">
                {/* about text  */}
                <div className="text">
                <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="Sharif Image" className="lg:w-1/2 w-full lg:h-auto md:w-3/5 mx-auto object-cover object-center rounded-lg" src={me} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 md:w-3/5 mx-auto mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">About Me</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-1">Kazi Shariful Islam</h1>
            {/* social icons  */}
        <div className="flex mb-4">
          <span className="flex py-2 text-gray-500 space-x-2">
            <a>
            <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 lbJwfL"><path d="M16.24 22a1 1 0 01-1-1v-2.6a2.15 2.15 0 00-.54-1.66 1 1 0 01.61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 00-.67-2.22 2.75 2.75 0 01-.41-2.06 3.71 3.71 0 000-1.41 7.65 7.65 0 00-2.09 1.09 1 1 0 01-.84.15 10.15 10.15 0 00-5.52 0 1 1 0 01-.84-.15 7.4 7.4 0 00-2.11-1.09 3.52 3.52 0 000 1.41 2.84 2.84 0 01-.43 2.08 4.07 4.07 0 00-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 01.82.66 1 1 0 01-.21 1 2.06 2.06 0 00-.55 1.56V21a1 1 0 01-2 0v-.57a6 6 0 01-5.27-2.09 3.9 3.9 0 00-1.16-.88 1 1 0 11.5-1.94 4.93 4.93 0 012 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 01.23-1.58c-2.06-.52-5-2-5-7a6 6 0 011-3.33.85.85 0 00.13-.62 5.69 5.69 0 01.33-3.21 1 1 0 01.63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 015.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 01.63.57 5.71 5.71 0 01.33 3.22.75.75 0 00.11.57 6 6 0 011 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 01.22 1.67V21a1 1 0 01-.94 1z" data-name="Layer 2"></path></svg>
            </a>
            <a>
            <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 lbJwfL"><g data-name="Layer 2"><g data-name="linkedin"><path d="M20 22h-1.67a2 2 0 01-2-2v-5.37a.92.92 0 00-.69-.93.84.84 0 00-.67.19.85.85 0 00-.3.65V20a2 2 0 01-2 2H11a2 2 0 01-2-2v-5.46a6.5 6.5 0 1113 0V20a2 2 0 01-2 2zm-4.5-10.31a3.73 3.73 0 01.47 0 2.91 2.91 0 012.36 2.9V20H20v-5.46a4.5 4.5 0 10-9 0V20h1.67v-5.46a2.85 2.85 0 012.83-2.85zM6 22H4a2 2 0 01-2-2V10a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2zM4 10v10h2V10zM5 7a3 3 0 113-3 3 3 0 01-3 3zm0-4a1 1 0 101 1 1 1 0 00-1-1z"></path></g></g></svg>
            </a>
            <a>
            <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 lbJwfL"><g data-name="Layer 2"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 01-1-1V7.25l7.4 5.55a1 1 0 00.6.2 1 1 0 00.6-.2L20 7.25V17a1 1 0 01-1 1z" data-name="email"></path></g></svg>
            </a>
            <a>
            <svg viewBox="0 0 24 24" height="20" width="20" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-ea9ulj-0 lbJwfL"><path fill-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" clip-rule="evenodd"></path></svg>
            </a>
          </span>
        </div>
        {/* about text  */}
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex gap-2 mt-4">
          <a href="#!" className=" text-white bg-indigo-500 bg-opacity-10  border-2 border-indigo-700 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:bg-opacity-40 rounded">Resume</a>
          <Link spy={true} smooth={true} offset={-64} duration={500} to="contact"  className=" text-white bg-indigo-500 bg-opacity-10 cursor-pointer border-2 border-indigo-700 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:bg-opacity-40 rounded">Contact</Link>
          {/* <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </div>
  </div>
</section>
                </div>
                <div className="image">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;