// App.js
import NavBar from './components/NavBar';
import WeatherPanel from './components/WeatherPanel';
import Spinner from './components/Spinner';
import './assets/css/App.css';

function App() {
  return (
    <div className="App font-sans text-gray-900 min-h-screen flex flex-col">
      <NavBar/>
      <WeatherPanel className="mb-10"/>
    </div>
  );
}

export default App;
