import React, {useState} from 'react';
import {Input} from 'antd';

const Inputs = ({setQuery}) => {
    const [city, setCity] = useState('');
    const handleSearchClick = (e) => {
        if (e.key === 'Enter') {
            if (city !== '') setQuery({q: city});
            let input = document.querySelector('.inputCity').value;
            console.log(input);
            input = '';
            console.log(input);
        }
    };

    function handleKeyPress() {
        console.log('You pressed a key.');
    }
    return (
        <div className="mt-2">
            <Input
                className="inputCity"
                onKeyPress={(e) => handleSearchClick(e)}
                onChange={(e) => setCity(e.currentTarget.value)}
                placeholder="Search for city..."
            />
        </div>
    );
};

export default Inputs;
