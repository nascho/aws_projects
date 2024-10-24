import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center py-4 w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className='text-4xl font-bold text-[#8892b0]'>
                    <p>Hi, I'm Nas, nice to meet you. Please take a look around.</p>
                </div>
                <div className='text-justify text-[#8892b0]'>
                    <p> 
                        As a software developer with enterprise-level experience, I have now transitioned into the AWS ecosystem, having completed the AWS Re/Start programme. My focus is on Cloud Computing, leveraging my background in various technologies, including programming languages, frameworks, testing tools, server management, and databases. I have hands-on experience with AWS services such as compute and storage, and I am confident in DevOps practices, including CI/CD pipelines and Infrastructure as Code (IaC) using tools such as CloudFormation. I have a drive to learn with a growth mindset, adaptable to diverse challenges, and possess strong communication skills gained during my experiences as a manager that make me an effective team member.
                    </p>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About