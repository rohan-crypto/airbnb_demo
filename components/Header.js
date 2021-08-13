// in next.js we need to whitelist the domains from where the images will come from.

import React from 'react'
// this next Image tag is different from normal image tag as it converts the image 
// inside it into .webp image  
import Image from 'next/image';
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, 
    UsersIcon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
            bg-white shadow-md p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" layout="fill"
                    objectFit="contain" objectPosition="left"
                />
            </div>
            <div className="flex items-center md:border-2 rounded-full 
                py-1.5 md:shadow-sm">
                <input type="text" placeholder="Start your search" 
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
        </header>
    )
}

export default Header;
