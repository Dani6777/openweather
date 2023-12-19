import React, { useState } from 'react';

const Form = ({ newLocation }) => {
    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        if (city === '' || !city) return;
        newLocation(city);
    };

    return (
        <form onSubmit={onSubmit} className="w-1/4 mx-auto mt-20">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                    Ciudad
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Ingrese la ciudad"
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
};
export default Form;
