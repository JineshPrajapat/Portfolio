import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Menus = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
];

export const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState(0);
    const [toggle, setToggle] = useState(false);

    const handleClick = (index) => {
        setActive(index);
        setToggle(!toggle);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };
        // Initial check
        handleResize();
        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const location = useLocation();
    const path = location.pathname;

    return (
        <div>
            <header className=' w-full bg-white border-b-2 fixed top-0 left-0 z-50 font-mono'>
                <div className='p-4 md:py-2 flex flex-row items-center justify-between bg-black text-white'>
                    <div className=''>
                        <NavLink to="/" className='flex flex-row gap-3 items-center text-xl md:text-2xl font-semibold font-mono'>
                            <div>&lt;&lt;&#123; Jinesh Prajapat &#125;&gt;&gt;</div>
                        </NavLink>
                    </div>
                    {isMobile ? (
                        <div>
                            <div className="text-3xl" onClick={() => handleToggle()}>
                                {!toggle ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                            </div>
                            {toggle && (
                                <div className='absolute mt-4 h-[100vh]  bg-white text-black w-full left-0 shadow-lg shadow-gray-300'>
                                    <ul className='flex flex-col mt-4'>
                                        {Menus?.map((menu, i) => (
                                            <li className={`links mb-3`} key={i}>
                                                <NavLink
                                                    className={`flex gap-3 py-2 px-2 duration-300 transition-all hover:bg-gray-200 ${path === menu.path ? "bg-gray-400" : ""}`}
                                                    to={menu.path}
                                                    activeClassName="text-blue"
                                                    onClick={() => handleClick(i)}
                                                >
                                                    <span className={`text-xl font-semibold pl-4`}>
                                                        {menu.name}
                                                    </span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='right-side flex flex-row justify-evenly '>
                            <ul className='flex '>
                                {Menus?.map((menu, i) => (
                                    <li className={`links `} key={i}>
                                        <NavLink
                                            className={`flex py-2 px-2 duration-400 transition-all rounded-md hover:scale-105 ${path === menu.path ? "bg-white text-black" : ""}`}
                                            to={menu.path}
                                            activeClassName="text-blue"
                                            onClick={() => handleClick(i)}
                                        >
                                            <span className={`text-2xl font-semibold px-4`}>
                                                {menu.name}
                                            </span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};
