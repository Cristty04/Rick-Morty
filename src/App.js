import './App.css';
import Characters from './pages/Characters';
import Location from './pages/Location';
import Navigator from './core/Navigator';
import { useState } from 'react';
import { login } from './auth/auth';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./pages/Login"

function App() {
  const [user, setUser] = useState(null)

  const authenticated = user != null;
 //con esta función le pasamos a la función del archivo auth.js el email y el password para que el setUser recoja el usuario encontrado
  const loginUser =({email, password}) => 
  setUser(login({ email,password }));

  const logoutUser = () => setUser(null);


  return (
    <div className="App">
      <Router>
        {/* a navigator le pasamos authenticated para que sepa cuando pintar el boton de login o logout y la función de logout para que la pueda usar*/}
      <Navigator authenticated={authenticated} logoutUser={logoutUser}/>
      </Router>
      
      <p>CHARACTERS</p>
      <Characters/>
      <p>LOCATIONS</p>
      <Location/>
      
    </div>
  );
}

export default App;
