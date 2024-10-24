import React from 'react';
import { data } from "../data/data.js";


const Projects = () => {

    // projects file
    const sortedProjects = data.sort((a, b) => b.id - a.id);
    //setProject(data);
  
    return (
        <div name='projects' className='w-full md:min-h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                    Projects
                </p>
        </div>

        {/** container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
       
        {/* Gird Item */}
        {sortedProjects.map((item, index) => (
        <div
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div ">
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 hover:cursor-pointer">
                <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                </span>
                <div className="pt-4 text-center ">
                    {/* Render Code button if github URL is not empty */}
                    {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                            <button
                                className="text-center rounded-lg px-4 py-3 m-2
                                            bg-white text-gray-700 font-bold text-lg"
                            >
                                GitHub
                            </button>
                        </a>
                    )}
                    {/* Render Live button if live URL is not empty */}
                    {item.site && (
                        <a href={item.site} target="_blank" rel="noopener noreferrer">
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Visit Site
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
        ))}
        </div>
        </div>
        </div>
    );
};

export default Projects;