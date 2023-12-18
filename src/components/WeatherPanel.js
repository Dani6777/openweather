import React, { useState } from 'react';
import Form from './Form';

const WeatherPanel = () => {

    const apiKey = 'e31eafebdb2489db26c5bc853ac8b689';
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&lang=es&q=';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?appid=' + apiKey + '&lang=es&q=';

    const [weather, setWeather] = useState([]);
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //weather
        const weatherResponse = await fetch(weatherUrl + loc);
        if (!weatherResponse.ok) {
            setLoading(false);
            setShow(false);
            console.error('Error fetching weather data');
            return;
        }
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        setWeather(weatherData);

        //Forecast
        const forecastResponse = await fetch(forecastUrl + loc);
        if (!forecastResponse.ok) {
            setLoading(false);
            setShow(false);
            console.error('Error fetching forecast data');
            return;
        }
        const forecastData = await forecastResponse.json();
        console.log(forecastData);
        setForecasts(forecastData);

        setLoading(false);
        setShow(true);
    };

    return (
        <React.Fragment>
            <Form newLocation={getLocation} />
        </React.Fragment>
    );
}

export default WeatherPanel;
