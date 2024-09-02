import { ArrowLeft } from 'lucide-react'
import React from 'react'
import Truck from '@/assets/delivery.svg'
import { ProjectDetails } from './ProjectDetails'

export const TechnoProjectsList = ({
    back,
    tab,
    techno,
    next
}) => {
    return (
        <div className={`w-full transition-all duration-300 flex-shrink-0 slide-${tab} projects_${techno.name}`}>
            <ArrowLeft color='navy' size={30} onClick={() => back()} className='cursor-pointer m-6'/>
            {
                techno ?
                    <div className='my-2 lg:mt-0'>
                        {
                            techno.projects.length !== 0 ?
                                <ul className='mt-4 lg:mt-0'>
                                    <p className='text-center italic'>Cliquez sur un projet pour afficher plus de détails</p>
                                    <div className='flex flex-wrap justify-center lg:justify-around py-6'>
                                        {
                                            techno.projects.map(project => (
                                                <ProjectDetails project={project} />
                                            ))
                                        }
                                    </div>
                                </ul>
                                :
                                <div className='flex flex-col items-center justify-center p-5 lg:flex-row lg:items-start'>
                                    <p className='text-center mt-4 lg:mt-10'>
                                        Les projets pour cette technologie sont en route&nbsp;!
                                    </p>
                                    <img src={Truck} className='mx-auto lg:mx-8 w-1/2 md:w-40 lg:w-50 mt-3' />
                                </div>
                        }
                    </div>
                    :
                    <div>
                        <p>Veuillez sélectionner une technologie pour arriver sur cet onglet</p>
                        <p>Si vous avez réussi à arriver ici par vos propres moyens, je vous laisse revenir en arrière de la même manière.</p>
                    </div>
            }
        </div>
    )
}
