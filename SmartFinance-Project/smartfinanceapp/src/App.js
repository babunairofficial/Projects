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

  //user interface
  /*
  const addUser = async (userData) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User added successfully!');
      } else {
        console.error('Error adding user:', response.status);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch('/api/users');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Error retrieving users:', response.status);
        return [];
      }
    } catch (error) {
      console.error('Error retrieving users:', error);
      return [];
    }
  };
*/

  return (
    <div>
      <NavBar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="body">
        <Greetings mode={mode}/>
        <Element mode = {mode} /*{addUser={addUser}}*/ />
      </div>
   
    </div>
  );
}

export default App;
