import { DateTime} from "luxon";

const API_KEY = "8652373b0e553603f070a94edba16598";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData =(infoType, searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

    return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};


const formatCurrentweather = (data) =>{
    const {
        coord: {lon, lat},
        main: {temp,feels_like, temp_min, temp_max, humidity,pressure,},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}

    } = data
    const {main: details,icon} = weather[0]

    return{
        lon, 
        lat, 
        temp, 
        feels_like,
        temp_max, 
        temp_min, 
        humidity, 
        pressure,
        name, 
        dt,
        country, 
        sunrise, 
        sunset, 
        details, 
        icon, 
        speed
    }
}

const formatForecastWeather = (data) =>{
    let { timezone, daily} = data;
    daily = daily.slice(1,8).map(d =>{
        return{
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        };
    });
    return {timezone, daily}
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData
    ('weather', searchParams).then(formatCurrentweather)


    const {lat, lon} =formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData('onecall',{
        lat, lon, exclude: 'current, minutely,alerts', units: searchParams.units
    }).then(formatForecastWeather)


    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

//Formatting time to localTimeZone 

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL'") =>
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


// getting icons from an API

const iconUrlFromCode = (code) =>
`https://openweathermap.org/img/wn/${code}@2x.png`;

export {formatToLocalTime, iconUrlFromCode};

export default getFormattedWeatherData