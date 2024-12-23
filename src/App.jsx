import Hero from './components/Hero.jsx';
import About from './components/About.jsx'; 
import Navbar from './components/Navbar.jsx';
import Features from './components/Features.jsx';
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;