import React, { useState } from 'react';


const Form = ({newLocation}) => {

    const [city, setCity] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city });
        if(city ===''|| !city) return;
        newLocation(city);
    }

    return (
        <div class="flex items-center justify-center h-screen">
            <form onSubmit={onSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
                        Ciudad
                    </label>
                    <input
                        type="text"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Ingrese la ciudad"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;