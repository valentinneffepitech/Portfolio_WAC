import React from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='mb-5 mx-2 w-full md:w-1/3 project_detail transition-all duration-200 rounded pb-4 fadeIn-1' onClick={() => choose(index)}>
            <div className='w-4/5 mx-auto overflow-hidden flex'>
                <img src={project.image} className='h-full cursor-pointer w-3/4' alt={project.name}/>
                <div className='w-1/4'>
                    {
                        project.technologies.length != 0 && project.technologies.map(p=>{
                            return <img src={p.image} className='w-1/2 mx-auto lg:ml-1 aspect-square'/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
