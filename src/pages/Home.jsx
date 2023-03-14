import React, {useEffect, useState} from 'react';
import { apiURL } from '../components/util/api';
import SearchInput from '../components/Search/SearchInput';
import FilterCountry from '../components/Filter/FilterCountry';
import CountryDetails from '../components/CountryDetails/countryDetails';
import CountryListView from '../components/CountryList/countryListView';
import { MdViewModule, MdViewList } from 'react-icons/md'
import DarkMode from '../components/DarkMode/darkMode';

const Home = () => {
    const [countries, setCountries] = useState([])
    const [view, setView] = useState(false)
    useEffect(() => {
        // fetch all countries
        const getCountries = async () => {
            try {
                const res = await fetch(`${apiURL}/all`)
                const data = await res.json()
                setCountries(data)
            } catch (error) {
                console.log(error)
            }
        }

        getCountries()
    }, []);

    // Get country name for searching
    const getCountryByName = async (countryName) => {
        try {
            const res = await fetch(`${apiURL}/name/${countryName}`);
            const data = await res.json();
            setCountries(data);
          } catch (error) {
            console.error(error);
          }
    }

    // Get region for filtering
    const getCountryByRegion = async (regionName) => {
        try {
          const res = await fetch(`${apiURL}/region/${regionName}`);
          const data = await res.json();
          setCountries(data);
        } catch (error) {
            console.error(error)
        }
      };

    return (
        <div className='bg-gray-100 dark:bg-gray-800 dark:tex-white'>

            {/* Navbar */}
            <div className='w-full shadow-md py-2 md:py-6 bg-white dark:bg-gray-700 dark:text-white mb-8 px-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-xs md:text-xl'>Around the world</h1>
                    <div className=''>
                        <DarkMode></DarkMode>
                    </div>
                </div>
            </div>

            {/* Search and Filter section */}
            <div className='md:flex md:justify-between lg:flex lg:justify-between 2xl:flex 2xl:justify-between mb-8 px-5'>
                <div className='py-2'>
                    <SearchInput onSearch={getCountryByName} />
                </div>
                <div className='flex gap-3 py-2'>
                    {
                        view === true ? <>
                            <button className='cursor-pointer text-3xl dark:text-white' onClick={() => setView(false)}>
                                <MdViewList></MdViewList>
                                <p className='text-sm'>List</p>
                            </button>
                        </> : <>
                        <button className='cursor-pointer text-3xl dark:text-white' onClick={() => setView(true)}>
                            <MdViewModule></MdViewModule>
                            <p className='text-sm'>Grid</p>
                        </button>
                        </>
                    }
                <FilterCountry onSelect={getCountryByRegion}/>
                </div>
            </div>

            {/* Country List & Country Grid */}
            <div className='grid grid-rows gap-4 px-5'>
                {view === true ? <>
                <div className='flex items-center text-center py-2 justify-evenly rounded-lg shadow-lg bg-black text-white dark:bg-gray-700 dark:text-white'>
                    <div className='w-10 sm:w-auto text-xs sm:text-base'>
                        <p></p>
                    </div>
                    <div className='w-20 sm:w-40 text-xs sm:text-base lg:text-xl'>
                        <p>Country</p>      
                    </div>
                    <div className='w-20 sm:w-40 text-xs sm:text-base lg:text-xl'>
                        <p>Population</p>
                    </div>
                    <div className='w-20 sm:w-40 text-xs sm:text-base lg:text-xl'>
                        <p>Region</p>
                    </div>
                    <div className='w-10 sm:w-40 text-xs sm:text-base hidden'>
                        <p>Capital</p>
                    </div>
                    <div className='w-10 sm:w-20 text-xs sm:text-base hidden lg:block lg:text-xl'>
                        <p>Capital</p>
                    </div>
                </div>
                    {countries.map((country) => (
                        <CountryListView key={country.name.common} {...country}></CountryListView>
                    ))}
                </> : <>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4'>
                    {countries.map((country) => (
                        <CountryDetails key={country.name.common} {...country}></CountryDetails>
                        ))}
                </div>
                </>}

            </div>
        </div>
    );
}

export default Home;
