import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,capital} = props.country
    return (
        <div className='country'>
            <h4>This is {name}</h4>
            <img src={flag} alt="" />
            <h4>This capital :  {capital}</h4>
        </div>
    );
};

export default Country;