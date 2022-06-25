
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import Repos from './pages/Repos';
import Test from './pages/Test';

function App() {
  return (
    <div className='text-gray-300'>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
