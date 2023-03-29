import './App.css';
import Navigator from './core/Navigator';
import { useState } from 'react';
import { login } from './auth/auth';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from "./pages/Login"
import Home from './pages/Home';
import RequiredAuth from './components/RequiredAuth';
import Gallery from './pages/Gallery'

function App() {
  const [user, setUser] = useState(null) 
  const authenticated = user != null;
 //con esta función le pasamos a la función del archivo auth.js el email y el password para que el setUser recoja el usuario encontrado
  const loginUser =({email, password}) => setUser(login({ email,password }));
  const logoutUser = () => setUser(null);


  return (
    <div className="App">
      <Router>
        {/* a navigator le pasamos authenticated para que sepa cuando pintar el boton de login o logout y la función de logout para que la pueda usar*/}
        <Navigator authenticated={authenticated} logoutUser={logoutUser}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={
          <RequiredAuth authenticated= {authenticated}>
            <Gallery/>
            </RequiredAuth>
      }></Route>
        <Route path='/login' element={<Login loginUser={loginUser}/>}/>
      </Routes>
      </Router>
      
    </div> 
  );
}

export default App;
