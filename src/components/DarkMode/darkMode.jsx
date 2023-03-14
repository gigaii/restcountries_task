import React from 'react';
import { useState, useEffect } from 'react';
import { MdNightlightRound } from 'react-icons/md'

const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            <button className='flex cursor-pointer items-center border border-gray-600 dark:border-gray-200 rounded-lg p-2' onClick={handleThemeSwitch}>
                <div className='text-md md:text-md'>
                    <MdNightlightRound></MdNightlightRound>
                </div>
                <div className='text-xs md:text-md pl-1.5'>
                    Dark Mode
                </div>
            </button>
        </div>
    );
}

export default DarkMode;
