import Hero from './components/Hero.jsx';
import About from './components/About.jsx'; 
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  );
};

export default App;