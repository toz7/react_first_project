import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer /> 
      </header>
      
    </div>
  );
}

export default App;
