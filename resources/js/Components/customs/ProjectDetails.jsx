import React from 'react'

export const ProjectDetails = ({
    project,
    index,
    choose
}) => {
    return (
        <div className='mb-12 mx-2 w-full md:w-1/3 lg:w-[30%] project_detail transition-all duration-200 rounded pb-4 fadeIn-1 border-b-2' onClick={() => choose(index)}>
            <div className='w-full mx-auto overflow-hidden flex flex-col'>
                <img src={project.image} className='h-full cursor-pointer w-full lg:h-[30vh] border-2 border-transparent hover:border-white transition-all duration-300' alt={project.name}/>
                <div className='w-full flex gap-2 mt-4'>
                    {
                        project.technologies.length != 0 && project.technologies.map(p=>{
                            return <img src={p.image} alt={p.name} className='w-[15%] mx-auto aspect-square'/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
