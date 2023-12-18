import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import './assets/css/App.css';


function App() {
  return (
    <div className="App">
      <NavBar/>  
      <WeatherPanel/>
    </div>
  );
}

export default App;
