import './singlework.css';
import { GithubLink, linkIcon } from './SocialIcons';
import { Tooltip } from './Tooltip';
const SingleWork = ({ work }) => {
    const { name, live, client, server, tech, features, img } = work;


    return (
        <>
            <div className="text-gray-400 body-font overflow-hidden ">
                <div className="container px-5 py-12 mx-auto ">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap ">
                        <img alt="ecommerce" width="300" height="300" className="thumb lg:w-1/2 w-full lg:h-auto h-64 aspect-video object-cover object-center rounded" src={img} img-data={img} />
                        {/* skeleton  */}

                        <div className="bg-gray-700/10 bg-opacity-40 rounded-lg px-5 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 pt-4">
                            <p className="">{
                                tech.slice(-4).map((t, i) => <span key={i} className='inline-flex px-1 items-center m-1  gap-1 text-gray-300'>
                                    <span className="bg-gray-600 text-accent rounded-full w-5 h-5 flex items-center justify-center p-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    </span>
                                    {t}
                                </span>)
                            }</p>

                            <h1 className="text-gray-300 text-3xl title-font font-medium mb-1">{name}</h1>

                            <ul className="leading-relaxed lg:-ml-28 bg-gray-900/80 text-slate-400 bg-opacity-80 backdrop-blur-md p-4 my-4 rounded">{
                                features.map((f, i) => <li key={i}>{f}</li>)
                            }</ul>

                            <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                                <a aria-label="linkedin" href={live} target="_blank" rel='noreferrer' className="text-accent/80 hover:text-accent inline-flex items-center">Live
                                    {linkIcon}
                                </a>
                                <a aria-label="github client" href={client} target="_blank" rel='noreferrer' className="text-gray-400 hover:text-gray-300 mr-3 inline-flex items-center ml-auto leading-none text-sm py-1 ">
                                    <Tooltip message="client source code">
                                        <GithubLink>Client</GithubLink>
                                    </Tooltip>
                                </a>

                                {server &&
                                    <a aria-label="github server" href={server} target="_blank" rel='noreferrer' className="text-gray-400 hover:text-gray-300 inline-flex items-center leading-none text-sm pl-3 border-l-2 border-gray-800">
                                        <Tooltip message="server source code">
                                            <GithubLink>Server</GithubLink>
                                        </Tooltip>

                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleWork;