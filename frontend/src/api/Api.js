import {getData, postData} from './ajax';

const BASE_URL_API = "https://restcountries.eu/rest/v2"

export const getAllCountries = () => {
    return getData(`${BASE_URL_API}/all`);
}

export const getCountryByCode = (code) => {
    return getData(`${BASE_URL_API}/alpha/${code}`);
}