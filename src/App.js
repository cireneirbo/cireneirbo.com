import './App.css';
// import Header from './components/Header';
import Nav from './components/navigation/Nav';
import Hello from './pages/Hello';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Hello />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
