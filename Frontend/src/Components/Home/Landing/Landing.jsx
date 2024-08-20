// import React, { useState, useEffect } from 'react';
// import { images } from '../../../constants';

// export const Landing = () => {
//     const backgroundImages = [images.landingImg, images.landingImg2, images.landingImg3, images.landingImg4, images.landingImg6, images.landingImg7 ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//         }, 30000);

//         return () => clearInterval(intervalId);
//     }, [backgroundImages.length]);

//     const backgroundStyle = {
//         backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//     };

//     return (
//         <>
//             <div class="relative mt-16 h-[90vh] md:h-[94vh] md:mt-16" style={backgroundStyle}>
//                 <div className='flex flex-col justify-center gap-8 items-center h-screen text-white font-extrabold text-3xl sm:text-4xl'>
//                     <div class=" w-48 h-60 md:w-64 md:h-80 rounded-3xl shadow-lg shadow-white">
//                         <img class="w-full h-full rounded-3xl " src={images.jinesh} alt="" />
//                     </div>
//                     <h1>Hey I am Jinesh Prajapat</h1>
//                     <h4>B. Tech. AI & DS, CTAE Udaipur</h4>
//                 </div>
//             </div>
//         </>
//     );
// };



import React, { useEffect } from "react";
import { images } from '../../../constants';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export const Landing = () => {
    // useEffect(() => {
    //     document.title = "Garud 21AI";
    //     AOS.init();
    // }, []);

    return (
        <section id="hero" className="hero h-[calc(100vh-68px)] lg:mb-20 scroll-mt-[12vh] section dark-background">
            <div className=" relative w-full h-full ">
                <video
                    preload="auto"
                    className="w-full h-full bg-slate-950 object-cover filter brightness-50"
                    loop
                    autoPlay
                    muted
                >
                    <source src={images?.backgroundanimated} type="video/mp4" />
                </video>

                <div class="absolute w-full lg:px-60 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-center -mt-6" >
                    <div className='flex flex-col justify-center gap-8 items-center h-screen text-white font-extrabold text-2xl sm:text-4xl ' data-aos="fade-up" data-aos-delay="400">
                        <div class=" w-48 h-60 md:w-64 md:h-80 rounded-3xl shadow-[0_2px_10px_2px_rgba(0,0,0,0.1)] shadow-gray-600">
                            <img class="w-full h-full rounded-3xl " src={images.jinesh} alt="" />
                        </div>
                        <h1>Hey I am Jinesh Prajapat</h1>
                        <h4>B. Tech. AI & DS, CTAE Udaipur</h4>
                    </div>
                </div>
            </div>
        </section>
    )
};
