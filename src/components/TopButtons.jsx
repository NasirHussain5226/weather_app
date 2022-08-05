import React from 'react'

function TopButtons({setQuery}) {

    const cities =[
        {
            id: 1,
            title: "Riyadh",
        },
        {
            id: 2,
            title: "Mexico City",
        },
        {
            id: 3,
            title: "Islamabad",
        },
        {
            id: 4,
            title: "Bangkok",
        },
    ]

  return (
    <div className="hidden md:flex justify-evenly flex-wrap my-3">
        {cities.map((city) =>(
            <button key={city.id} className='text-white text-lg font-medium ml-5 
            hover:scale-105 duration-300' onClick={() => setQuery({q: city.title})}>
                {city.title}
            </button>
        ))}
    </div>
  )
}

export default TopButtons