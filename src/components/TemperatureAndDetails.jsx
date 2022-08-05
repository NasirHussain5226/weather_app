import React from 'react';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherServices';

function TemperatureandDetails({weather: {
   dt, details, icon, temp,speed, humidity, feels_like, timezone,pressure
}}) {
  return (
    <div className='flex justify-evenly items-center flex-wrap'>
        <div className='bg-gradient-to-br from-gray-700 to-black rounded-xl px-5 shadow shadow-gray-800 mx-5 my-6'>
            <div className='text-white'>
                <img src={iconUrlFromCode(icon)} alt="clouds" className="w-36"/>
            </div>
            <div className='text-center pt-5'>
                <p className="text-xl text-bold text-white">{`${temp.toFixed()}°C`}</p>
            </div>
            <div className='text-center pb-5'>
                <p className='text-white text-xl'>{details}</p>
                <p className='text-white text-sm'>{formatToLocalTime(dt,timezone)}</p>
            </div>
        </div>
       
        <div className='flex justify-center items-center bg-gradient-to-br from-gray-700 to-black shadow shadow-gray-600 px-3 py-5 rounded'>
            <div className='flex flex-col mx-2'>
                <div className='text-center pb-5'>
                    <p className='text-white text-sm'>Pressure</p>
                    <p className='text-white text-xs'>{`${pressure.toFixed()}Pa`}</p>
                </div>
                <div className='text-center pb-5'>
                    <p className='text-white text-sm'>Humidity</p>
                    <p className='text-white text-xs'>{`${humidity.toFixed()}%`}</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <div className='text-center pb-5'>
                        <p className='text-white text-sm'>Wind</p>
                        <p className='text-white text-xs'>{`${speed.toFixed()}km/h`}</p>
                </div>
                <div className='text-center pb-5'>
                        <p className='text-white text-sm'>Feels</p>
                        <p className='text-white text-xs'>{`${feels_like.toFixed()}°C`}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TemperatureandDetails