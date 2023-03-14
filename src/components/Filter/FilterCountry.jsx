import React from 'react';

const FilterCountry = ({onSelect}) => {

    const selectHandler = (e) => {
        const regionName = e.target.value
        onSelect(regionName)
    }

    return (
        <select onChange={selectHandler} className='p-2 w-full shadow-md rounded-md font-medium dark:bg-gray-700 dark:text-white'>
            <option>Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    );
}

export default FilterCountry;