import { useEffect, useState } from 'react'
import { getCoordinates } from './services/getCoordinates'
import { getCurrentWeather } from './services/getCurrentWeather';
import DataContainer from './components/dataContainer/DataContainer';

import './App.css'


function App() {
  const [weather, setweather] = useState(null);
  const [isCelsius, setisCelsius] = useState(true)
  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      
      if(coordinates){
        const weatherData = await getCurrentWeather(
          coordinates.latitude, 
          coordinates.longitude
          );
        setweather(weatherData);
      } else {
        //
      }
    };
    loadWeather();
  }, [])
  
  return (

    <div className="container_app">
      <h1 className="Titule">Weather App</h1>
      {weather ? (
        <div className="weather_container">
          <DataContainer weather={weather} isCelsius={isCelsius} />

          <div className="container_button">
            <button onClick={() => setisCelsius(!isCelsius)}>
              Change °{isCelsius ? "F" : "C"}
            </button>
          </div>
        </div>
      ) : (
        <p>Loading weather ... </p>
      )}
    </div>
  )
}

export default App
