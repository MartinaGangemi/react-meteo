import {DateTime} from 'luxon';

const API_KEY = '7f237406defed31937b7d1318c82d4af';
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
        .splice(0, 15)
        .map((d) => {
            return {
                title: formatToLocalTime(d.dt, d.timezone, 'ccc'),
                weather: d.weather[0].description,
                temp: d.main.temp,
                icon: d.weather[0].icon,
            };
        })
        .reduce((unique, item) => {
            //let {id, day} = item;
            return {
                ...unique,
                [item.title]: [
                    ...(unique[item.title] || [
                        item.weather,
                        item.temp,
                        item.icon,
                    ]),
                ],
            };
        }, {});

    // const dayInaWeek = new Date().getDay();
    // const forecastDays = weekDays
    //     .slice(dayInaWeek, weekDays.length)
    //     .concat(weekDays.slice(0, dayInaWeek));
    // return forecastDays;
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
    }).then(formatForecastWeather);

    return {...formattedCurrentWeather, formattedForecastWeather};
};

const formatToLocalTime = (
    secs,
    zone,
    format = "ccc, dd LLL yyyy '| Local time : 'hh:mm a",
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData;
