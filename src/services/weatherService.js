import {faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import {DateTime} from 'luxon';

const API_KEY = 'f76531c607ada2a619e33269a7bf007f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});
    console.log(url);
    return fetch(url)
        .then((response) => response.json())
        .catch((err) => console.log('Fetch problem' + err.message));
};

const deconstructCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone,
    } = data;

    const {main: description, icon} = weather[0];
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        description,
        icon,
        speed,
        timezone,
    };
};

const formatForecastWeather = (data) => {
    return data.list

        .map((d) => {
            return {
                title: formatToLocalTime(d.dt, d.timezone, 'ccc'),
                weather: d.weather[0].description,
                temp: d.main.temp,
                icon: d.weather[0].icon,
            };
        })
        .filter(
            (value, i, self) =>
                i === self.findIndex((day) => day.title === value.title),
        )
        .slice(1, 6);
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams,
    ).then(deconstructCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const dailyForecast = await getWeatherData('forecast', {
        lat,
        lon,
        units: searchParams.units,
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, dailyForecast};
};

const formatToLocalTime = (secs, format = 'ccc') =>
    DateTime.fromSeconds(secs).toFormat(format);

const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};
