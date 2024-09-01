import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Navbar/Header';
import { Services } from './components/Services/Services';
import { Feature } from './components/Feature/Feature';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Services />
      <Feature />
    </Router>
  
  );
}

export default App;
