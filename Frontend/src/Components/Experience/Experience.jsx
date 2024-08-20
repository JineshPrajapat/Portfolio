import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const experienceData = [
    {
        title: 'Full Stack Web Development (MERN)',
        company: 'KapiNova, Udaipur',
        project: 'Beyond School Application',
        duration: 'April 2024 - June 2024',
        description: `Enables course enrollment, payment processing, and sends verification emails post-payment. Users can effortlessly sign in or sign up using their Google account, integration with Razorpay ensures that buying courses is a breeze – users can complete their purchase with just a click.`,
        technologies: 'Technologies used: MongoDB, ExpressJS, ReactJS, NodeJs, VScode, GitHub',
        liveLink: '', // replace with the actual live link
        sourceCode: '' // replace with the actual source code link
    }
];

export const Experience = () => {
    return (
        <section className='my-16 mx-8 lg:m-16' data-aos="fade-up" data-aos-delay="200" >
            <h1 className='text-3xl md:text-4xl font-extrabold underline'>Experience</h1>
            {experienceData.map((experience, index) => (
                <div className='text-left mt-8 md:nt-16'>
                    <h2 className='text-xl font-semibold text-gray-800'>{experience.title}</h2>
                    <h3 className='text-xl md:text-lg font-medium text-gray-600 flex flex-col md:justify-between white'>
                        <p>{experience.company}</p>
                        <p className='text-sm text-gray-400'>{experience.duration}</p>
                    </h3>
                    <p className='italic text-gray-500'>{experience.project}</p>
                    <p className='mt-4 text-gray-700'>{experience.description}</p>
                    <p className='mt-4 font-medium text-gray-800'>{experience.technologies}</p>
                    <div className='flex mt-6 space-x-4'>
                        {experience.liveLink && (
                            <a href={experience.liveLink} target='_blank' rel="noopener noreferrer" className='bg-black text-white font-medium px-4 py-3 rounded-md hover:bg-blue-800'>
                                View Project &nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        )}
                        {experience.sourceCode && (
                            <a
                                href={experience?.sourceCode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors'
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

