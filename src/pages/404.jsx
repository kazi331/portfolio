
const NotFound = () => {
    return (
        <div className='w-full h-80 flex items-center justify-center text-gray-100'>
            <div className="text-center">
                <h1>404 NOT FOUND</h1>
                <a aria-label="back-to-home" href="/" className="inline-flex items-center bg-gray-800 border-0  py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">HOME</a>
            </div>
        </div>
    );
};

export default NotFound;