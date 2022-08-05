import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";



function DailyForeCast({title, items}) {


  return (
   <div className='flex flex-col'>
  
    <p className='text-center mx-auto text-white pt-7 pb-2'>{title}</p>

     <div className=' grid grid-flow-col gap-2 px-9 rounded '>
         {items.map((item,index) =>(
          <div key={index} className='bg-gradient-to-br from-gray-800 to-black rounded px-5 py-5 text-center text-white'>
            <p className='font-light text-xs'>{item.title}</p>
            
            <img src={iconUrlFromCode(item.icon)} alt="clounds" className='w-8 mx-auto'/>

            <p className='text-xs'>{`${item.temp.toFixed()}°C`}</p>
          </div>
         ))} 
    </div>

  </div>
  )
}

export default DailyForeCast