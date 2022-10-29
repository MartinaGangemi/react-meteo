import React from 'react';
import {Row, Col} from 'antd';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';

const Details = () => {
    return (
        <div>
            <Row className="mt-2  align-center ">
                <Col className="mb-2" span={24}>
                    Soleggiato?
                </Col>
                <Col span={8}>Icona</Col>
                <Col span={8}>
                    <h2 className="text-white">34°</h2>
                </Col>
                <Col span={8} className="weather-details">
                    <p>
                        Percepite <span></span>
                    </p>
                    <p>
                        Umidità <span></span>
                    </p>
                    <p>
                        Vento <span></span>
                    </p>
                </Col>
            </Row>

            {/* sistemare le icone */}

            <Row className="mt-2  align-center ">
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Rise: <span>ora</span>
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Set: <span>ora</span>
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Hight: <span>ora</span>
                </Col>
                <Col className="text-light" span={1}>
                    |
                </Col>
                <Col span={5}>
                    <FontAwesomeIcon icon={faSun} /> Low: <span>ora</span>
                </Col>
            </Row>
        </div>
    );
};

export default Details;
