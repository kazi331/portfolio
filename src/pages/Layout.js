import Home from './Home';

const Layout = () => {
    return (
        <div className="flex">
            <div className="hidden lg:flex h-screen justify-center min-w-[3rem]">
                <div className="text-white fixed top-16 bottom-0 flex items-center bg-gray-800">Hello</div>
            </div>
            {/* Home content */}
            <Home />
            <div className="hidden lg:flex h-screen justify-center min-w-[3rem]">
                <div className="text-white fixed top-16 bottom-0 flex items-center bg-gray-800">Hello</div>
            </div>
        </div>
    );
};

export default Layout;