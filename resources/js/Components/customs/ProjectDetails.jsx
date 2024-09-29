import React, { useState } from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='flex flex-col flex-wrap justify-between items-center mb-5 mx-2 w-full md:w-1/3 lg:w-[25%] project_detail transition-all duration-200 rounded glass3 pb-4' onClick={() => choose(index)}>
            <img src={project.image} className='w-full cursor-pointer border-b-2' />
            <h4 className='w-full pt-2 px-6 font-semibold text-lg '>
                {project.name}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: project.description }} className='w-full p-6 pt-2' ></div>
            <ul className='flex items-center justify-start mt-[1rem] w-full px-6'>
                {
                    project.technologies.map(techno => (
                        <li key={techno.id} className='w-1/5 lg:w-[10%]'>
                            <img src={techno.image} className='w-full lg:aspect-square' />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
