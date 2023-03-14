import React from 'react';
import { Link } from 'react-router-dom';

const CountryListView = ({flags,name,population,region,capital}) => {
    return (        
        <div>
            <Link to={`/country/${name.common}`}>                
            <div className='flex items-center text-center py-2 justify-evenly rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white'>
                    <img src={flags.png} className="h-8 sm:h-24 w-10 sm:w-auto aspect-video"></img>
                    <div className='w-20 sm:w-60 text-xs sm:text-base lg:text-xl'>
                        <p>{name.common}</p>      
                    </div>
                    <div className='w-20 sm:w-60 text-xs sm:text-base lg:text-xl'>
                        <p className=''>{population.toLocaleString()}</p>
                    </div>
                    <div className='w-20 sm:w-60 text-xs sm:text-base lg:text-xl'>
                        <p className=''>{region}</p>
                    </div>
                    <div className='w-10 sm:w-20 text-xs sm:text-base hidden'>
                        <p className=''>{capital}</p>
                    </div>
                    <div className='w-20 sm:w-60 text-xs sm:text-base hidden lg:block lg:text-xl'>
                        <p className=''>{capital}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CountryListView;
