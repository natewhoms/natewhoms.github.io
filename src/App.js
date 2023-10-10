
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from './components/Particle';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <Particle />
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
