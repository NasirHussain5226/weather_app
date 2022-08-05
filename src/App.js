import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureandDetails from "./components/TemperatureAndDetails"
import DailyForeCast from "./components/DailyForeCast"
import getFormattedWeatherData from './services/weatherServices';
import {useEffect, useState } from "react";



function App() {

  const [query, setQuery] = useState({q: 'islamabad'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] =useState(null)

  useEffect(() => {
    const fetchWeather = async () =>{

      getFormattedWeatherData({...query, units}).then(data =>{
        setWeather(data);
      });
  
    };
    fetchWeather();
  }, [query, units]);
  return (
    <div className=' mx-auto bg-gradient-to-b from-gray-700 to-black py-4 mt-5
    max-w-screen-sm shadow-xl shadow-gray-500 rounded-3xl'>

     <TopButtons setQuery = {setQuery}/>
     <Inputs setQuery ={setQuery} />


    {/* Only load the changes when weather exist  */}
    {weather && (
      <div>
        <TimeAndLocation weather={weather}/>
        <TemperatureandDetails weather={weather}/>
        <DailyForeCast  title="Daily Forecast" items={weather.daily}/>
      </div>
    )
    }

    
    </div>
  );
}

export default App;
