import React from 'react';
import { UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'
import { formatToLocalTime } from '../services/weatherServices';


function TimeAndLocation({weather: {
    dt, timezone, name, country, sunrise, sunset,temp_max, temp_min
}}) {
  return (
    <div>
        <div className="flex  justify-center items-center my-7">
            <p className='text-white text-xl font-medium'>
                {`${name},${country}`}
            </p>
        </div>
        <div className='flex flex-row items-center justify-center space-x-1 text-white text-sm '>
            <UilSun />
            <p className="font-light">
            Rise: 
            <span className='font-medium ml-1'>
            {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
            </span></p>
            <p className='font-light'> | </p>

            <UilSunset />
            <p className="font-light">
            Set: 
            <span className='font-medium ml-1'>
            {formatToLocalTime(sunset, timezone, 'hh:mm a')}
            </span></p>
            <p className='font-light'> | </p>


            <UilArrowUp />
            <p className="font-light">
            High: 
            <span className='font-medium ml-1'>
            {`${temp_max.toFixed()}°C`}    
            </span></p>
            <p className='font-light'> | </p>

            <UilArrowDown />
            <p className="font-light">
            Low: 
            <span className='font-medium ml-1'>
            {`${temp_min.toFixed()}°C`}
            </span></p>
                
        </div>

    </div>
  )
}

export default TimeAndLocation