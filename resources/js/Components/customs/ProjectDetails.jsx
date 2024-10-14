import React, { useState } from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='grid mb-5 mx-2 w-full md:w-1/3 lg:w-[25%] project_detail transition-all duration-200 rounded glass3 pb-4' onClick={() => choose(index)}>
            <img src={project.image} className='w-full cursor-pointer border-b-2 lg:aspect-video' alt={project.name}/>
            <h4 className='w-full pt-2 px-6 font-semibold text-lg '>
                {project.name}
            </h4>
        </div>
    )
}
