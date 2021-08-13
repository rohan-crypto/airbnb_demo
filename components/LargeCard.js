import React from 'react'
import Image from 'next/image';

function LargeCard({img, title, description, buttonText}) {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl w-64 mb-2 font-semibold">{title}</h3>
                <p className="font-semibold mb-8">{description}</p>
                <button className="bg-white py-4 rounded-lg px-6
                   font-semibold text-sm">{buttonText}</button>
            </div>
        </div>
    )
}

export default LargeCard;
