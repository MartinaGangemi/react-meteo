import React, {useState, useEffect} from 'react';
import {Input} from 'antd';
import {GEO_API_URL, geoApiOptions} from '../services/weatherService';
import {AsyncPaginate} from 'react-select-async-paginate';
import {useForm} from 'react-hook-form';

const Inputs = ({setQuery}) => {
    const [city, setCity] = useState('');

    const {handleSubmit, reset} = useForm();

    const handleSearchClick = () => {
        if (city !== '') {
            setQuery({q: city});
        }
    };

    return (
        <form onSubmit={handleSubmit(handleSearchClick)} className="mt-2">
            <Input
                className="inputCity"
                //onKeyPress={(e) => handleSearchClick(e)}
                onChange={(e) => setCity(e.currentTarget.value)}
                placeholder="Search for city..."
            />
        </form>
    );
};

export default Inputs;
