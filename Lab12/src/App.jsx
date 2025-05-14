import NotFound from './pages/NotFound';


import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Meal from './pages/Meal';
import Favorites from './components/Favorites';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Admin from './pages/Admin';
import Search from './components/Search';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

