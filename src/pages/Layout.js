
import Navbar from '../sections/Navbar';
import Home from './Home';
import Leftbar from './Leftbar';

const Layout = () => {
    return (<>
        <Navbar />
        <div className="flex">
            <div className="hidden lg:flex h-screen justify-center min-w-[5rem]">
                <div className="fixed top-16 bottom-0 flex">
                    <Leftbar />
                </div>
            </div>
            <Home />
        </div>
    </>
    );
};

export default Layout;