import React from 'react';

import {Row, Col} from 'antd';

const HourlyForecast = () => {
    return (
        <div className="mt-2">
            <h4 className="text-white forecast-text">Daily Forecast</h4>

            <Row className="mt-2 align-center">
                <Col span={4}>
                    <p>04:30 PN</p>
                    Icona
                    <h4 className="text-white">22°</h4>
                </Col>
                <Col span={4}>
                    <p>04:30 PN</p>
                    Icona
                    <h4 className="text-white">22°</h4>
                </Col>
                <Col span={4}>
                    <p>04:30 PN</p>
                    Icona
                    <h4 className="text-white">22°</h4>
                </Col>
                <Col span={4}>
                    <p>04:30 PN</p>
                    Icona
                    <h4 className="text-white">22°</h4>
                </Col>
                <Col span={4}>
                    <p>04:30 PN</p>
                    Icona
                    <h4 className="text-white">22°</h4>
                </Col>
            </Row>
        </div>
    );
};

export default HourlyForecast;
