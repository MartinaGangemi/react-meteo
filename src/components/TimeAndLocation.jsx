import React from 'react';

import {Row, Col} from 'antd';
const TimeAndLocation = () => {
    return (
        <Row justify="center" className="mt-2 align-center ">
            <Col span={24}>
                <h4 className="text-white">Date</h4>
            </Col>
            <Col span={24}>
                <h2 className="text-white">Location</h2>
            </Col>
        </Row>
    );
};

export default TimeAndLocation;
