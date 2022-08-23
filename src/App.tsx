import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Price from './pages/Price';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Price />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
