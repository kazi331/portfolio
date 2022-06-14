
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import Navbar from './sections/Navbar';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer/>
    </div >
  );
}

export default App;
