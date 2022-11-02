import {useState, useEffect} from 'react';
import {Layout} from 'antd';
const {Content} = Layout;

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import Details from './components/Details';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import 'antd/dist/antd.css';
import './assets/css/style.scss';
import './assets/css/query.scss';
import './assets/css/utilities.css';
import getFormattedWeatherData from './services/weatherService';

function App() {
    const [query, setQuery] = useState({q: 'berlin'});
    const units = 'metric';
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units}).then((data) => {
                setWeather(data);
            });
        };

        fetchWeather();
    }, [query, units]);

    console.log(weather);
    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons setQuery={setQuery} />
                    <Inputs setQuery={setQuery} />

                    {weather && (
                        <div>
                            <TimeAndLocation weather={weather} />
                            <Details weather={weather} />
                            {/* <HourlyForecast /> */}
                            <DailyForecast items={weather.dailyForecast} />
                        </div>
                    )}
                </div>
            </Content>
        </Layout>
    );
}

export default App;
