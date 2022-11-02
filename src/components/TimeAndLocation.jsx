import React from 'react';

import {Row, Col} from 'antd';
import {formatToLocalTime} from '../services/weatherService';
const TimeAndLocation = ({weather: {dt, name, country}}) => {
    return (
        <Row justify="center" className="mt-2 align-center ">
            <Col span={24}>
                {/* da sistemare la timezone */}
                <h4 className="text-white">Today</h4>
            </Col>
            <Col span={24}>
                <h2 className="text-white">{`${name}, ${country}`}</h2>
            </Col>
        </Row>
    );
};

export default TimeAndLocation;
