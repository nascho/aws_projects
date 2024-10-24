import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Nas Choudhury
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a Cloud Engineer.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm a Software Developer who has transitioned to Cloud Engineering.<br/>
                I have a focus on Cloud Computing, leveraging my background in various technologies.<br/>
                I have hands-on experience with AWS services such as compute and storage, and I am confident in DevOps practices, including CI/CD pipelines and Infrastructure as Code (IaC) using tools such as CloudFormation.
            </p>
            <div>
                <Link to="projects" smooth={true} duration={500} offset={-80}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Projects 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
