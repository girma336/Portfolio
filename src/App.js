import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './pages/portfolio/Portfolio';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import BackGround from './components/BackGround';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <BackGround />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
