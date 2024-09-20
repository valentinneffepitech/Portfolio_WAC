import React, { useState } from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='flex flex-col flex-wrap justify-between items-center mb-5 mx-2 w-full md:w-1/3 lg:w-[30%] project_detail border-2 border-gray-200 hover:border-blue-900 transition-all duration-200 rounded' onClick={() => choose(index)}>
            <img src={project.image} className='w-full cursor-pointer aspect-[4/3]' />
        </div>
    )
}
