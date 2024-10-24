import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll';


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b-2 border-pink-600'>
            <div className="text-4xl font-semibold hover:cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                    W23
                </Link>
            </div>

            {/** menu using react-scroll */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-80}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} offset={-80}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} offset={-80}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        

            {/** hamburger menu */}
            <div onClick={handleClick} className="md:hidden z-10">
                { !nav ? <FaBars /> : <FaTimes /> }
            </div>


            {/** mobile menu */}
            <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} offset={-80}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-80}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500} offset={-80}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        


            {/** social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/naschoudhury" target="blank" className="flex justify-between items-center w-full text-gray-300">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="https://github.com/nascho" target="blank" className="flex justify-between items-center w-full text-gray-300">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8f7087]'>
                        <Link to="contact" className="flex justify-between items-center w-full text-gray-300">
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar