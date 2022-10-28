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

function App() {
    return (
        <Layout>
            <Content className="site-layout-background">
                <TopButtons />
                <Inputs />
                <TimeAndLocation />
                <Details />
                <HourlyForecast />
                <DailyForecast />
            </Content>
        </Layout>
    );
}

export default App;
