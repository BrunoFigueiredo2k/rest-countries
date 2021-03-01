import React, {useState, useEffect} from 'react'
import Filterbar from '../components/Filterbar';
import CountriesList from  '../components/CountriesList';
import { getAllCountries } from '../api/Api';

function Home() {
    const [countries, setCountries] = useState([]);
    const res = getAllCountries();

    return (
       <div className="section">
            <div className="container">
                <Filterbar />
                <CountriesList countries={countries}/>
            </div>
       </div>
    )
}

export default Home
