import React from 'react';
import { Landing } from './Landing/Landing';
import { About } from './About/About';
import { images } from '../../constants';
import '@fortawesome/fontawesome-free/css/all.css';
import { Experience } from '../Experience/Experience';

const contactLinks = [
  {
    icon: 'fa-solid fa-phone',
    href: 'tel:8905009854',
    label: '+91 8905009854'
  },
  {
    icon: 'fa-solid fa-envelope',
    href: 'mailto:prajapatjinesh585@gamil.com',
    label: 'prajapatjinesh585@gmail.com'
  },
  {
    icon: 'fa-brands fa-linkedin-in',
    href: 'https://www.linkedin.com/in/jinesh-prajapat',
    label: 'LinkedIn'
  },
  {
    icon: 'fa-brands fa-github',
    href: 'https://www.github.com/JineshPrajapat',
    label: 'Github'
  }
];


export const Home = () => {
  return (
    <div>
      <Landing />
      <About />
      <Experience/>

      <section className='m-8 text-left text-xl' >
        <p className='mb-5 font-semibold'>Connect with me :</p>
        <div className='flex flex-col md:flex-row justify-evenly md:items-center'>
          {contactLinks.map((link, index) => (
            <div key={index} className=' text-sm md:text-xl flex items-center gap-4 mb-3 duration-300 hover:scale-105'>
              <i className={link.icon}></i>
              <a href={link.href} target='_blank' className=' duration-300 hover:underline '>{link.label}</a>
            </div>
          ))}
        </div>
      </section>

      <footer className=' border-t-[1px] border-gray-400 w-[100vw] flex justify-center items-center'>
        <p className='p-3 text-sm' >Copyright &copy; 2024 - Jinesh Prajapat. All Rights Reserved.</p>
      </footer>
      
    </div>
  )
}
