import React from 'react';

import {SearchOutlined, EnvironmentOutlined} from '@ant-design/icons';
import {Row, Col, Input, Button} from 'antd';

const Inputs = () => {
    return (
        <div className="mt-2">
            <Row justify="center">
                <Col xs={{span: 16, offset: 1}} lg={{span: 16, offset: 2}}>
                    <Input placeholder="Search for city..." />
                </Col>
                <Col xs={{span: 4, offset: 1}} lg={{span: 4, offset: 2}}>
                    <SearchOutlined className="search-icon" />
                    <EnvironmentOutlined className="search-icon" />
                </Col>
            </Row>
        </div>
    );
};

export default Inputs;
