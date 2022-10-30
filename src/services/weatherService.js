import {DateTime} from 'luxon';

const API_KEY = 'f76531c607ada2a619e33269a7bf007f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);

    //const url = `${BASE_URL}/${infoType}?q=${searchParams}&appid=${API_KEY}`;

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
    };
};

const formatForecastWeather = (data) => {
    return data.list
        .slice(1, 36)
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
                i ===
                self.findIndex(
                    (t) => t.title === value.title && t.title === value.title,
                ),
        );
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        'weather',
        searchParams,
    ).then(deconstructCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('forecast', {
        lat,
        lon,
        units: searchParams.units,
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, formattedForecastWeather};
};

const formatToLocalTime = (
    secs,
    zone,
    format = "ccc, dd LLL yyyy '| Local time : 'hh:mm a",
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
