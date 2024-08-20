import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Education } from './Components/Education/Education';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './hooks/ScrollToTop';

function App() {

  useEffect(() => {
    document.title = "Garud 21AI";
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop/>
    </div>
  );
}

export default App;
