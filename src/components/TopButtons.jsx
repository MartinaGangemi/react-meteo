import React from 'react';
import {Button, Row, Col} from 'antd';

const TopButtons = () => {
    const cities = [
        {
            id: 1,
            title: 'Torino',
        },
        {
            id: 2,
            title: 'Sidney',
        },
        {
            id: 3,
            title: 'Tokyo',
        },
        {
            id: 4,
            title: 'Tokyo',
        },
    ];
    return (
        <div>
            <Row gutter={[8, 8]}>
                {cities.map((city, i) => (
                    <Col key={city.id} span={6}>
                        <Button type="primary" block>
                            {city.title}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TopButtons;
