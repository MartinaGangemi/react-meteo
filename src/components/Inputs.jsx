import React, {useState} from 'react';
import {Input} from 'antd';
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
                onChange={(e) => setCity(e.currentTarget.value)}
                placeholder="Search for city..."
            />
        </form>
    );
};

export default Inputs;
