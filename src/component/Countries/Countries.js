import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import'./Countries.css'

const Countries = () => {
    const [countries, setcountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setcountries(data))
    },[])
    return (
        <div>
            <h1>I am from country : {countries.length}</h1>
            <div className='grid'>
            {
                 countries.map(country=><Country country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;