import React from 'react'

const skillsData = [
    {
        heading: 'Programming languages:',
        skills: ['C++', 'Python']
    },
    {
        heading: 'Web Development:',
        skills: ['HTML', 'CSS', , 'Sass', 'Tailwind', 'React', 'Node.js']
    },
    {
        heading: 'Database:',
        skills: ['PostgreSQL', 'MongoDB']
    },
];


export const About = () => {
    return (
        <div className=' my-16 mx-8 lg:m-16 '>
            <h1 className='text-3xl md:text-4xl font-extrabold underline'>About</h1>
            <div className='text-justify mt-8 md:mt-16'>
                <p>Hello there! Welcome to my profile.</p>
                <p>I am Jinesh Prajapat, currently pursuing an B.Tech in Artificial Intelligence and Data Science Engineering at the College of Technology And Engineering, Udaipur. Originally from Udaipur, the City of Lakes. I'm a curious tech enthusiast, always on the lookout for new adventures and learning opportunities. Innovation fuels my fire, and I thrive on finding imaginative solutions to all kinds of problems. Whether it's tackling a coding challenge or brainstorming a new project idea. I have a strong passion for tackling problems using data structures and algorithms.</p>
                <br />
                <p>With a keen interest in staying updated with the latest technologies and trends, I am always eager to embrace new challenges and continuously enhance my skillset. I seek opportunities to contribute to projects that not only push the boundaries of innovation but also have a positive impact on people's lives. My adaptability, combined with my willingness to embrace emerging technologies, positions me to excel in the fast-paced and ever-evolving software industry. I am excited to contribute my creativity and analytical mindset to develop efficient and elegant solutions that address real-world challenges. I am currently seeking an opportunity to contribute, learn, and grow as a dedicated Software Developer within an innovative and collaborative environment. I remain open to exploring potential opportunities and collaborations.</p>
            </div>

            <div className='mt-12 text-left'>
                <h1 className='text-2xl font-extrabold'>Key Skills</h1>
                {skillsData.map((category, index) => (
                    <div className='mt-6' key={index}>
                        <h2 className='text-xl font-medium mb-2'>{category.heading}</h2>
                        <div className='flex flex-row flex-wrap md:pl-16 gap-5'>
                            {category.skills.map((skill, skillIndex) => (
                                <p className='py-2 px-4 bg-black text-white rounded-md' key={skillIndex}>{skill}</p>
                            ))}
                        </div>
                    </div>
                ))}

                <ul className='list-disc mt-12 md:mt-6'>
                    <li>Solid understanding of algorithms, data structures, and object-oriented principles</li>
                    <li>Strong problem-solving abilities and attention to detail</li>
                    <li>Effective communication and teamwork skills gained through project collaborations</li>
                    <li>Quick learner with good grasping ability. </li>
                </ul>
            </div>
        </div>
    )
}
