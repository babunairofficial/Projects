import React, { useState } from 'react';
import './App.css';
import Greetings from './components/Greetings';
import NavBar from './components/NavBar';
import Element from './Element';
import Alert from './components/Alert';

function App() {

  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';     
      showAlert("Dark mode Activated","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light mode Activated","success");
    }
  }

  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="body">
        <Greetings mode={mode}/>
        <Element mode = {mode}/>
      </div>
   
    </div>
  );
}

export default App;
