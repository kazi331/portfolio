import me from '../resources/me.jpg';
const SingleBlog = () => {
    return (
        <div className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full p-4 flex shadow-lg bg-[#1E212B] rounded-lg overflow-hidden">

                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                    <span className="text-gray-400 pb-2 mb-2 border-b-2 border-gray-700">Jul</span>
                    <span className="font-medium text-lg leading-none text-gray-300 title-font">18</span>
                </div>

                <div className="flex-grow pl-6">
                    <h2 className="tracking-widest text-xs title-font font-medium fav-color mb-1">CATEGORY</h2>
                    <a href="#!" className="title-font text-xl py-1 inline-block font-medium text-gray-300 hover:text-[#00ffc6] mb-3">Post Title goes here</a>
                    <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    <a href='https://github.com/kazi331' className="inline-flex items-center">
                        <img alt="blog" src={me} className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center" />
                        <span className="flex-grow flex flex-col pl-3">
                            <span className="title-font font-medium text-white"> Sayem Khan</span>
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default SingleBlog;