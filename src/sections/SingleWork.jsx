import sample from '../resources/sample.png';
import './singlework.css';
const SingleWork = () => {
    const randomImage = 'https://api.lorem.space/image/watch?w=150&h=150'
    return (
        <div className=" mx-auto text-white rounded-lg lg:w-5/12 work" style={{ background: `url(${sample})` }}>
            <div className="h-full flex items-start mt-64 py-2 px-8 bg-gray-900">
                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-400">Jul</span>
                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                </div>
                <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-xl font-medium text-white mb-3">Project title goes  here</h1>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    {/* footer links  */}
                    <div class="flex items-center flex-wrap text-indigo-300 ">
                        <a href='#!' class=" inline-flex items-center md:mb-2 lg:mb-0">View Details
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <a href='#!' class="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-indigo-400">
                            Live
                        </a>
                        <a href='#!' class="mr-3 inline-flex items-center leading-none text-sm">
                           Client 
                        </a>
                        &nbsp;
                        <a href='#!' class="inline-flex items-center leading-none text-sm">
                           Server
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleWork;