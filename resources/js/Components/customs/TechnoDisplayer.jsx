import React, { useState } from 'react'
import { ProjectDetails } from './ProjectDetails'
import { ProjectCarroussel } from './ProjectCarroussel';

export const TechnoDisplayer = ({
    projects
}) => {

    const [fullDisplay, setFullDisplay] = useState(false);

    const closeCarroussel = () => setFullDisplay(false);

    const chooseIndex = (index) => setFullDisplay(index);

    return (
        <div id="technos" className={`flex lg:mx-auto lg:w-[90%]`}>
            <div id="technos__list" className={`w-full overflow-x-hidden flex flex-wrap justify-around lg:justify-evenly lg:gap-[1rem] flex-shrink-0 transition-all duration-300 border-collapse p-5`}>
                {
                    projects.map((project, index) => (
                        <ProjectDetails key={project.id} project={project} index={index + 1} choose={chooseIndex} />
                    ))
                }
            </div>
            <ProjectCarroussel projects={projects} show={fullDisplay} hide={closeCarroussel} />
        </div>
    )
}
