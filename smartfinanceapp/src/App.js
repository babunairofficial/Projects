
import './App.css';
import Greetings from './components/Greetings';
import NavBar from './components/NavBar';
import Element from './Element';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="body">
        <Greetings />
        <Element />
      </div>
   
    </div>
  );
}

export default App;
