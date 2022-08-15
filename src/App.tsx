import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import Repos from './pages/Repos';
import { chevronUp } from './sections/SocialIcons';

function App() {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setShowBtn(true) : setShowBtn(false)
    })
  });
  return (
    <div className='text-gray-300'>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Back to top btn */}
      <button onClick={() => window.scroll(0, 0)} className={`${showBtn ? 'bottom-8' : '-bottom-20'} fixed right-5 transition-all duration-100   p-2 bg-gray-50 bg-opacity-5 rounded-full backdrop-blur-3xl`}>{chevronUp}</button>
      <ToastContainer />
    </div >
  );
}

export default App;
