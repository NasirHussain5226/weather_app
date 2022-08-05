/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { UilSearch, UilUserLocation } from '@iconscout/react-unicons';
import { useState } from "react";


function inputs({setQuery}) {

  const [city, setCity] = useState("");
  const handleSearchClick = () =>{
    if(city !=="") setQuery({q: city})
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-4 w-full">
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            value={city}
            onChange={(e) =>setCity(e.currentTarget.value)}
            type="text"
            placeholder="Search for city..."
            className="text-xl font-normal rounded-xl p-2 w-full focus:outline-none capitalize placeholder:lowercase"/>
            <UilSearch 
            size={30} 
            className="text-white cursor-pointer hover:scale-125 transition ease-out"
            onClick ={handleSearchClick}/>
            <UilUserLocation 
            size={30} 
            className="text-white cursor-pointer hover:scale-125 transition ease-out"
            onClick={handleLocationClick}/>
        </div>
    </div>
  )
}

export default inputs