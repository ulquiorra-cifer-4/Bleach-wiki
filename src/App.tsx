import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gotei13 from './pages/Gotei13';
import Espada from './pages/Espada';
import Sternritters from './pages/Sternritters';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gotei-13" element={<Gotei13 />} />
            <Route path="/espada" element={<Espada />} />
            <Route path="/sternritters" element={<Sternritters />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
    }
