import { GithubLink, linkIcon } from "./SocialIcons";
import { Tooltip } from "./Tooltip";


const SingleRepo = ({ repo }) => {
    const { name, html_url, description, homepage, language } = repo
    return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full text-white">
            <div className="h-full flex items-center shadow-lg ring-1 ring-indigo-400 p-4 rounded-lg">
                <div className="flex-grow">
                    <h2 className="capitalize title-font text-lg font-medium">{name}  <span className="text-xs opacity-40">- {language}</span></h2>
                    <p className="text-gray-200 text-sm pt-2">{description ? description : " No Description Provided"} </p>
                    <div className="flex items-center justify-between flex-wrap mt-auto w-full">
                        {homepage && <a area-label="linkedin" href={homepage} target="_blank" rel='noreferrer' className="text-indigo-400 hover:text-[#00ffc6] inline-flex items-center">Live
                            {linkIcon}
                        </a>}

                        <a area-label="user" href={html_url} target="_blank" rel='noreferrer' className="text-gray-300 hover:text-gray-300 mr-3 inline-flex items-center ml-auto leading-none text-sm py-1 ">
                            <Tooltip message="source code">
                                <GithubLink > github </GithubLink>
                            </Tooltip>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRepo;