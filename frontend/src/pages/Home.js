import React from 'react'
import Filterbar from '../components/Filterbar';
import CountriesList from  '../components/CountriesList';
import { getAllCountries } from '../../api/Api';

function Home() {
    const countries = getAllCountries();

    return (
        <div className="container">
            <Filterbar />
            <CountriesList countries={countries}/>
        </div>
    )
}

export default Home
