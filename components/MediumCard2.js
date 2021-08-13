import React from 'react'
import Image from 'next/image';

function MediumCard2({img, title, description}) {
    return (
        <div className="cursor-pointer transform transition 
            duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>
            <h3 className="text-xl mt-1 font-semibold">{title}</h3>    
            <p className="text-sm">{description}</p>        
        </div>
    )
}

export default MediumCard2;
