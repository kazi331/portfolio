import './singlework.css';
const SingleWork = () => {
    const randomImage = 'https://api.lorem.space/image/watch?w=150&h=150'
    return (
        <>
            {/* <div className=" mx-auto text-white rounded-lg lg:w-5/12 work" style={{ background: `url(${sample})` }}>
            <div className="h-full flex items-start mt-64 py-2 px-8 bg-gray-900">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-400">Jul</span>
                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-xl font-medium text-white mb-3">Project title goes  here</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                

                    <div className="flex items-center flex-wrap text-indigo-300 ">
                        <a href='#!' className=" inline-flex items-center md:mb-2 lg:mb-0">View Details
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <a href='#!' className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-indigo-400">
                            Live
                        </a>
                        <a href='#!' className="mr-3 inline-flex items-center leading-none text-sm">
                           Client 
                        </a>
                        &nbsp;
                        <a href='#!' className="inline-flex items-center leading-none text-sm">
                           Server
                        </a>
                    </div>
                </div>
            </div>
        </div> */}

            {/* new layout  */}

            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                <h1 className="text-white text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                               
                                <p className="leading-relaxed lg:-ml-28 bg-gradient-to-r from-gray-800 to-gray-900 p-4 my-4 rounded">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                                
                                <div className="flex mt-4">
                                    <span className="title-font font-medium text-2xl text-white">$58.00</span>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleWork;