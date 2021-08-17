// in next.js we need to whitelist the domains from where the images will come from.

import React, { useState } from 'react'
// this next Image tag is different from normal image tag as it converts the image 
// inside it into .webp image  
import Image from 'next/image';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, 
    UsersIcon} from '@heroicons/react/solid';

// these imports are for the calendar that is shown in airbnb    
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import { useRouter } from 'next/dist/client/router';
import next from 'next';

// in order to make a dynamic placeholder 
function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    // next.js has a built-in router so we don't need to install any router 
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate); 
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const search = () => {
        // we will use query parameter not only push so that a dynamic heading can be 
        // displayed using user's inputted information 
        
        // router.push("/search");

        router.push ({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },    
        });
    }

    const selectionRange= {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
            bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto"
                onClick={() => router.push("/")}>
                <Image src="https://links.papareact.com/qd3" layout="fill"
                    objectFit="contain" objectPosition="left"
                />
            </div>
            <div className="flex items-center md:border-2 rounded-full 
                py-1.5 md:shadow-sm">
            {/* if no value is given to placeholder it will display Start your search  */}
                <input type="text" placeholder={placeholder || "Start your search"} 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow outline-none pl-5 bg-transparent
                        text-sm text-gray-600 placeholder-black 
                        cursor-pointer font-semibold"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 
                    text-white rounded-full p-1.5 md:mx-2 cursor-pointer"/>
            </div>
            <div className="flex items-center space-x-2 justify-end text-gray-500">
                <p className="text-black font-semibold text-sm bg-white py-2 px-3
                    hidden md:inline cursor-pointer hover:bg-gray-100
                    rounded-full">Become a host</p>
                <GlobeAltIcon className="h-14 text-black bg-white rounded-full
                    cursor-pointer hover:bg-gray-100 p-4"/>
                <div className="flex space-x-2 items-center border 
                    border-gray-300 py-1 pl-2 pr-0.5 rounded-full cursor-pointer
                    hover:shadow-md">
                    <MenuIcon className="h-4 text-black "/>
                    <UserCircleIcon className="h-8"/>
                </div>
            </div>

            {searchInput && (
                <div className="flex flex-col mx-auto col-span-3 mt-4 border
                    border-gray-300 rounded-lg">
                    <DateRangePicker ranges={[selectionRange]}
                        minDate={new Date()} rangeColors={["#FD5B61"]}
                        onChange={handleSelect}/>
                    <div className="flex items-center border mb-3 bg-gray-100
                        border-gray-300 mx-10 rounded-lg shadow-md">
                        <h2 className="text-lg flex-grow font-semibold">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-4"/>
                    {/* we can set min = {number} so that user can't go below min */}
                        <input type="number" className="w-12 pl-3 text-lg 
                            outline-none text-red-500 bg-gray-100"
                            value={noOfGuests} min={1}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            />
                    </div>
                    <div className="flex justify-evenly mt-1">
                        <button className="hover:text-gray-600 
                            text-gray-500" onClick={resetInput}>Cancel</button>
                        <button className="hover:text-red-600 
                            text-red-400" onClick={search}>Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header;
