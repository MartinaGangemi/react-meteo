import React from 'react';
import {Button, Row, Col} from 'antd';

const TopButtons = ({setQuery}) => {
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
            title: 'Paris',
        },
    ];
    return (
        <div>
            <Row gutter={[8, 8]}>
                {cities.map((city, i) => (
                    <Col key={city.id} span={6}>
                        <Button
                            onClick={() => setQuery({q: city.title})}
                            key={city.id}
                            type="primary"
                            block>
                            {city.title}
                        </Button>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TopButtons;
