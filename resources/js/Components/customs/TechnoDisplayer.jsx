import React, { useState } from 'react'
import { ProjectDetails } from './ProjectDetails'
import { ProjectCarroussel } from './ProjectCarroussel';

export const TechnoDisplayer = ({
    projects,
    categories
}) => {

    const [fullDisplay, setFullDisplay] = useState(false);

    const closeCarroussel = () => setFullDisplay(false);

    const chooseIndex = (index) => setFullDisplay(index);

    const verifIfDisplay = (project) => {
        if(categories.length == 0) {
            return true;
        }
        if(project.technologies.length != 0){
            const result = project.technologies.filter(techno => categories.includes(techno.category_id));
            if(result.length != 0){
                return true;
            }
        }
        return false;
    }

    return (
        <div id="technos" className={`flex lg:mx-auto lg:w-[90%]`}>
            <div id="technos__list" className={`w-full overflow-x-hidden flex flex-wrap justify-around lg:justify-evenly lg:gap-[1rem] lg:w-[90%] lg:mx-auto flex-shrink-0 transition-all duration-300 border-collapse p-5`}>
                {
                    projects.map((project, index) => 
                        {
                            if(verifIfDisplay(project)){
                                return (
                                    <ProjectDetails key={project.id} project={project} index={index + 1} choose={chooseIndex} />
                                )
                            }
                        })
                }
            </div>  
            <ProjectCarroussel projects={projects} show={fullDisplay} hide={closeCarroussel} />
        </div>
    )
}
