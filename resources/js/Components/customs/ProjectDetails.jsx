import React, { useState } from 'react'

export const ProjectDetails = ({
    project
}) => {
    const [show, setShow] = useState(false);
    return (

        <div className='flex flex-col lg:flex-row flex-wrap justify-between items-center mb-5 mx-2 w-full md:w-1/3 lg:w-2/5 lg:h-100 project_detail'>
            <img src={project.image} className='w-3/4 lg:w-1/2 mr-4 cursor-pointer lg:ml-2 mb-2' onClick={() => setShow(prev => !prev)} />
            {
                show &&
                <div className={`h-100 overflow-hidden transition-all duration-200 mt-3 pb-3 lg:w-2/5 lg:flex lg:flex-col lg:justify-between show lg:p-4 slideIn`}>
                    <h4 className='underline text-bold underline-offset-2 text-xl my-2 lg:mt-0'>
                        {project.name}
                    </h4>
                    <p className='w-full'>
                        {project.description}
                    </p>
                </div>
            }
        </div>
    )
}
