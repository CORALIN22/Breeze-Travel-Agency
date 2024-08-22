import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Navbar/Header';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
    </Router>
  
  );
}

export default App;
