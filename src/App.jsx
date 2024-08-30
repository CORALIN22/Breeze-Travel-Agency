import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Navbar/Header';
import { Services } from './components/Services/Services';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Services />
    </Router>
  
  );
}

export default App;
