import React from 'react'
import Image from 'next/image';

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer transform transition 
            duration-300 ease-out">
            <div className="relative h-64 w-64">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>
            <h3 className="text-xl mt-1 font-semibold">{title}</h3>
        </div>
    )
}

export default MediumCard;
