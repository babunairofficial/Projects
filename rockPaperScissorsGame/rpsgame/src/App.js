import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a 
        className="App-link"
        href="/"
        target="_blank"
        rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>        
        <p>
          Click on image to begin
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Play Rock, Paper and Scissors
        </a>
      </header>
    </div>
  );
}

export default App;