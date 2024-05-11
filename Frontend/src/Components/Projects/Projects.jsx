import React from 'react';
import { images } from '../../constants';
import '@fortawesome/fontawesome-free/css/all.css';

const projectsData = [
    {
        title: "Chatlytics | The WhatsApp Chat Analyzer",
        description: "Discover the magic of Python in web app! Explore chat patterns, usage stats, and more with ease. Gain insights through dynamic visualizations and understand your talks.",
        features: "Users can upload WhatsApp chats (without media) – group or private – to explore insights like message stats, timelines, activity maps, word clouds, and download visual graphs. Chats aren't stored.",
        technology: "Python, Streamlit",
        imageUrl: images.chatlytics,
        link: 'https://chatlytics.streamlit.app/'
    },
    {
        title: "Beyond School Application",
        description: "A user-friendly web app enables seamless course enrollment, payment processing, and sends verification emails post-payment for enhanced user experience.",
        features: "Users can easily sign in or sign up using their Google account, getting straight into our platform without any hassle. Buying courses is super easy too – just a click and you're done, thanks to our smooth connection with Razorpay for payments.And with Express.js, our REST API facilitates smooth communication, allowing users to interact with our platform effortlessly.",
        technology: "MongoDB, ExpressJS, ReactJS, NodeJs",
        imageUrl: images.beyondscool,
        link: 'https://www.beyondscool.com/',
        production: "yes"
    },
    {
        title: "Quiz App",
        description: "A simple quiz app designed with multiple-choice questions and a timer for each question.",
        features: "",
        technology: "HTML, CSS, Javascript",
        imageUrl: images.quiz1,
        link: 'https://jineshprajapat.github.io/QuizApp/'
    },
];

export const Projects = () => {
    const isMobile = window.innerWidth <= 900;

    return (
        <div className="m-4 lg:m-16 lg:mt-32 mt-28">
            <h1 className="text-3xl md:text-4xl font-extrabold underline">Projects</h1>
            <div className='my-10 md:mt-16 '>
                {projectsData.map((project, index) => (
                    <div key={index} className='flex flex-col lg:flex-row gap-5 mb-28 md:mb-48 justify-center items-center'>
                        {isMobile ? (
                            <>
                                <h1 className='uppercase underline mb-1'>{`Project ${index + 1}`}</h1>
                                <h2 className='text-2xl text-left md:text-3xl font-semibold mb-4'>{project.title}</h2>
                                <div className='lg:w-[35vw] shadow-md shadow-gray-600'>
                                    <img className="w-full" src={project.imageUrl} alt="" />
                                </div>
                                <div className='lg:w-[65vw] text-left'>
                                    <div className='mb-8'>
                                        <p>{project.description}</p><br />
                                        {project.features &&
                                            <p><span className='font-semibold'>Features:</span> {project.features}</p>
                                        }
                                        <p><span className='font-semibold'>Technology used:</span> {project.technology}</p>
                                        {project?.production &&
                                            <p className='underline italic text-right'>In Production </p>
                                        }
                                    </div>

                                    <a href={project.link} target='_blank' rel="noopener noreferrer" className='bg-blue-700 text-white font-medium px-4 py-3 rounded-md hover:bg-blue-800'>
                                        View Project &nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                            </>
                        ) : index % 2 === 0 ? (
                            <>
                                <div className='lg:w-[65vw] text-left'>
                                    <h1 className='uppercase mb-4'>{`Project ${index + 1}`}</h1>
                                    <h2 className='text-2xl md:text-3xl font-semibold mb-4'>{project.title}</h2>
                                    <div className='mb-8'>
                                        <p>{project.description}</p><br />
                                        {project.features &&
                                            <p><span className='font-semibold'>Features:</span> {project.features}</p>
                                        }
                                        <p><span className='font-semibold'>Technology used:</span> {project.technology}</p>
                                        {project?.production &&
                                            <p className='underline text-right'>In Production </p>
                                        }
                                    </div>
                                    <a href={project.link} target='_blank' rel="noopener noreferrer" className='bg-blue-700 text-white font-medium px-4 py-3 rounded-md hover:bg-blue-800'>
                                       View Project &nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                                <div className='lg:w-[35vw] shadow-md shadow-gray-600'>
                                    <img className="w-full" src={project.imageUrl} alt="" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='lg:w-[35vw] shadow-md shadow-gray-600'>
                                    <img className="w-full" src={project.imageUrl} alt="" />
                                </div>
                                <div className='lg:w-[65vw] text-left'>
                                    <h1 className='uppercase mb-4'>{`Project ${index + 1}`}</h1>
                                    <h2 className='text-2xl md:text-3xl font-semibold mb-4'>{project.title}</h2>
                                    <div className='mb-8'>
                                        <p>{project.description}</p><br />
                                        {project.features &&
                                            <p><span className='font-semibold'>Features:</span> {project.features}</p>
                                        }
                                        <p><span className='font-semibold'>Technology used:</span> {project.technology}</p>
                                        {project?.production &&
                                            <p className='underline italic text-right'>In Production </p>
                                        }
                                    </div>

                                    <a href={project.link} target='_blank' rel="noopener noreferrer" className='bg-blue-700 text-white font-medium px-4 py-3 rounded-md hover:bg-blue-800'>
                                        View Project &nbsp; <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
