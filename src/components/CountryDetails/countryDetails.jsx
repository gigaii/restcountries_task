import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetails = ({flags,name,population,region,capital}) => {
    return (
        <div>
                <Link to={`/country/${name.common}`}>
                    <div className='container sm:mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4'>
                        <img src={flags.png} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg aspect-video"></img>
                        <div className='p-4'>
                            <h3 className='font-bold mb-4 text-xl'>{name.common}</h3>
                            <p className='text-base'>Population: <span className='text-gray-700 dark:text-gray-300'>{population.toLocaleString()}</span></p>
                            <p className='text-base'>Region: <span className='text-gray-700 dark:text-gray-300'>{region}</span></p>
                        <p className='text-base'>Capital: <span className='text-gray-700 dark:text-gray-300'>{capital}</span></p>
                        </div>
                    </div>
                </Link>
        </div>
    );
}

export default CountryDetails;
