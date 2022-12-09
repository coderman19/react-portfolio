import './styles/style.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/scrollToTop';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contacts from './pages/Contacts/Contacts';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          {/* <Route path='/project/:id' element={<Project />} /> */}
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>   
      
    </div>
  );
}

export default App;
