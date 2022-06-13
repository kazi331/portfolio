
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NotFound from './pages/404';
import Layout from './pages/Layout';
import Navbar from './sections/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  );
}

export default App;
