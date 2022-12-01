import './styles/style.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Header />

        <div className="section">
          <div className="container">
            <h2 className="title-1">
              Projects
            </h2>
            <ul className="projects">
              <li className="project">
                <a href="/project_page.html">
                  <img className="project__img" src="./img/projects/01.jpg" alt="Project img"/>
                  <h3 className="project__title">Gaming streaming portal</h3>
                </a>
              </li>
              <li className="project">
                <a href="project_page.html">
                  <img className="project__img" src="./img/projects/02.jpg" alt="Project img"/>
                  <h3 className="project__title">Video service</h3>
                </a>
              </li>
              <li className="project">
                <a href="/project_page.html">
                  <img className="project__img" src="./img/projects/03.jpg" alt="Project img"/>
                  <h3 className="project__title">Video portal</h3>
                </a>
              </li>

              <li className="project">
                <a href="/dating.html">
                  <img className="project__img" src="./img/projects/04.jpg" alt="Project img"/>
                  <h3 className="project__title">Dating app</h3>
                </a>
              </li>
              <li className="project">
                <a href="/landing.html">
                  <img className="project__img" src="./img/projects/05.jpg" alt="Project img"/>
                  <h3 className="project__title">Landing</h3>
                </a>
              </li>
              <li className="project">
                <a href="/gaming">
                  <img className="project__img" src="./img/projects/06.jpg" alt="Project img"/>
                  <h3 className="project__title">Gaming community</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>

          <Footer />
    </div>
  );
}

export default App;
