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

    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        url = 'http://openweathermap.org/img/w/';

        // Verificar si existe la propiedad weather y si tiene al menos un elemento en el array
        if (weather.weather && weather.weather.length > 0) {
            iconUrl = url + weather.weather[0].icon + '.png';
        } else {
            // Manejar el caso en que no haya datos de clima válidos
            console.error('No hay datos de clima disponibles.');
        }
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
                                    <h3 className="mb-2">{weather.name}</h3>
                                    <p className="mb-2">{date}</p>
                                    <div className="flex items-center justify-center mb-2">
                                        <h1 className="text-4xl font-bold mr-2">{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                        <img src={iconUrl} alt="icon" className="h-8 w-8" />
                                    </div>
                                    <p className="mb-2">{weather.weather[0].description}</p>
                                </div>
                                {/* Imagen de fondo sin opacidad */}
                                <img
                                    src="https://source.unsplash.com/800x600/?weather"
                                    className="img-fluid rounded-start"
                                    alt="imagen"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">Datos del Tiempo</h3>
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
