import Hero from './components/Hero.jsx';
import About from './components/About.jsx'; 
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;