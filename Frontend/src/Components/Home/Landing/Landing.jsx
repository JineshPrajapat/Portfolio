import React, { useState, useEffect } from 'react';
import { images } from '../../../constants';

export const Landing = () => {
    const backgroundImages = [images.landingImg, images.landingImg2, images.landingImg3, images.landingImg4, images.landingImg6, images.landingImg7 ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 30000);

        return () => clearInterval(intervalId);
    }, [backgroundImages.length]);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div class="relative mt-9 h-[90vh] md:h-[94vh] md:mt-16" style={backgroundStyle}>
                <div className='flex flex-col justify-center gap-8 items-center h-screen text-white font-extrabold text-4xl'>
                    <div class=" w-48 h-60 md:w-64 md:h-80 rounded-3xl shadow-lg shadow-white">
                        <img class="w-full h-full rounded-3xl " src={images.jinesh} alt="" />
                    </div>
                    <h1>Hey I am Jinesh prajapat</h1>
                    <h4>B. Tech. AI & DS, CTAE Udaipur</h4>
                </div>
            </div>
        </>
    );
};

