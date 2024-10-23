import React from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='grid mb-5 mx-2 w-full md:w-1/3 lg:w-[25%] project_detail transition-all duration-200 rounded glass3 pb-4 fadeIn-1' onClick={() => choose(index)}>
            <div className='w-full lg:aspect-[5/3] overflow-hidden'>
                <img src={project.image} className='h-full transition-all duration-200 hover:scale-125 cursor-pointer border-b-2' alt={project.name}/>
            </div>
            <h3 className='w-full pt-2 px-6 font-semibold text-lg'>
                {project.name}
            </h3>
        </div>
    )
}
