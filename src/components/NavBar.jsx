import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a className="logo flex items-center gap-3 relative" href="#hero">
                    <div className="relative">
                        <img
                            src="/images/avatar.png"
                            alt="Nguyen Thanh Dat"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue-500 object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <span className="absolute bottom-0 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    <span className="hidden md:inline text-white-50 text-xl font-semibold">
                        Web Developer
                    </span>
                </a>



                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className='group'>
                                <a href={link} >
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className='contact-btn group'>
                    <div className='inner'>
                        Contact Me
                    </div>
                </a>
            </div>
        </header>
    );
}

export default NavBar