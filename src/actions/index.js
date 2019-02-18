import axios from 'axios';

const API_KEY = '194bf6647e4b09b675d344a119cca95c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Responsible for creating an action that contains a request to the back-end API
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;

    // Returns a prommise called request
    const request = axios.get(url);

    // Action creators need to return an action; an object with a mandatory type key value pair
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}