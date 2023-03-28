import './App.css';
import Characters from './pages/Characters';
import Location from './pages/Location';
import Navigator from './core/Navigator';
  


function App() {
  return (
    <div className="App">
      <Navigator/>
      <p>CHARACTERS</p>
      <Characters/>
      <p>LOCATIONS</p>
      <Location/>
      
    </div>
  );
}

export default App;
