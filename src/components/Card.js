import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = '';
    var iconUrl = '';
    var iconUrl3 = '';
    var iconUrl6 = '';
    var iconUrl9 = '';

    var forecastDate3 = '';
    var forecastDate6 = '';
    var forecastDate9 = '';

    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png';
        iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
        iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' + forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' + forecast.list[2].dt_txt.substring(11, 13);
    }

    return (
        <div className="mt-5 mb-8 relative">
            {showData === true ? (
                <div className="container mx-auto">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 relative">
                            <div className="md:flex-shrink-0 transform translate-y-[-15%] md:translate-y-0 md:scale-105 relative">
                                {/* Información del clima */}
                                <div className="absolute top-0 left-0 right-0 text-center bg-violet-500 text-black p-2 opacity-75 z-20">
                                    <h3 className="mb-2 mt-6">{weather.name}</h3>
                                    <p className="mb-2">{date}</p>
                                    <div className="flex items-center justify-center mb-2">
                                        <h1 className="text-4xl font-bold mr-2">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                        <img src={iconUrl} alt="icon" className="h-8 w-8" />
                                    </div>
                                    <p className="mb-2">{weather.weather[0].description}</p>
                                </div>
                                <img
                                    src="https://source.unsplash.com/800x600/?weather"
                                    className="w-full h-full  rounded-md"
                                    alt="imagen"
                                />
                            </div>
                            <div className="p-4 card-body mt-3 text-start">
                                <div className="p-4 card-body text-start mt-2 bg-gray-100 rounded-lg shadow-md">
                                    <h3 className="text-2xl font-bold mb-4">Datos del Tiempo</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="mb-4">
                                            <h5 className="text-lg font-semibold">Temperatura máxima</h5>
                                            <p>{(weather.main.temp_max - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="text-lg font-semibold">Temperatura mínima</h5>
                                            <p>{(weather.main.temp_min - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="text-lg font-semibold">Sensación térmica</h5>
                                            <p>{(weather.main.feels_like - 273.15).toFixed(1)}°C</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="text-lg font-semibold">Humedad</h5>
                                            <p>{weather.main.humidity}%</p>
                                        </div>
                                        <div className="mb-4">
                                            <h5 className="text-lg font-semibold">Velocidad del viento</h5>
                                            <p>{weather.wind.speed} m/s</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-5" />
                                <div className="flex space-x-4 pl-4 mb-4">
                                    { /* Mini Carta 1 */}
                                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-md">
                                        <p className="text-lg font-bold">{forecastDate3}Hrs</p>
                                        <p className="flex items-center"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p className="text-xl">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                    { /* Mini Carta 2 */}
                                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-md">
                                        <p className="text-lg font-bold">{forecastDate6}h</p>
                                        <p className="flex items-center"><img className="mr-2" src={iconUrl6} alt="icon" />{forecast.list[1].weather[0].description}</p>
                                        <p className="text-xl">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-center text-xl text-gray-700">Sin Datos</h2>
            )}
        </div>
    );
};

export default Card;