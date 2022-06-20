
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import Navbar from './sections/Navbar';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Test from './pages/Test';

function App() {
  return (
    <div className='text-gray-300'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div >
  );
}

export default App;
