import {useState} from 'react';
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
    const fetchWeather = async () => {
        const data = await getFormattedWeatherData({q: 'london'});
        console.log(data);
    };

    fetchWeather();

    return (
        <Layout>
            <Content className="site-layout-background">
                <div className="container">
                    <TopButtons />
                    <Inputs />
                    <TimeAndLocation />
                    <Details />
                    {/* <HourlyForecast /> */}
                    <DailyForecast />
                </div>
            </Content>
        </Layout>
    );
}

export default App;
