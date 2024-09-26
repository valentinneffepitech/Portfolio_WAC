import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export const ProjectCarroussel = ({
    projects,
    index = 0,
    hide,
    show
}) => {
    const [screen, setScreen] = useState(projects[show] ? index : 0);

    const nextScreen = (index) => {
        if (projects[index + 1]) {
            return index + 1
        } else {
            return 0;
        }
    }

    const previousScreen = (index) => {
        if (projects[index - 1]) {
            return index - 1
        } else {
            return projects.length - 1;
        }
    }

    useEffect(() => {
        if (show) {
            setScreen(show - 1)
        }
    }, [show])

    return (
        <div className={`fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.7)] z-20 flex justify-between items-center ${!show ? 'hidden' : 'fadeIn-2'}`}>
            <X size={30} color='white' className='fixed top-6 right-6 cursor-pointer' onClick={() => hide()} />
            <ChevronLeft size={40} color='white' className='cursor-pointer' onClick={() => setScreen(prev => previousScreen(prev))} />
            <div className='flex overflow-scroll w-4/5 gap-10'>
                {
                    projects[screen] &&
                    <div className='bg-white shrink-0 w-full md:w-3/4 md:mx-auto lg:w-full lg:flex pb-10 lg:pb-0'>
                        <img src={projects[screen].image} className='w-full cursor-pointer mb-2 lg:mb-0 aspect-[4/3] border-b-gray-300 border-b-[1px] lg:border-b-0' />
                        <div className={`overflow-hidden transition-all duration-200 mt-3 pb-3 lg:w-full lg:flex lg:flex-col lg:p-6 lg:justify-between p-4 lg:border-l-2 lg:border-l-gray-400 lg:my-6`}>
                            <h4 className='underline text-bold underline-offset-2 text-xl my-2 lg:mt-0'>
                                {projects[screen].name}
                            </h4>
                            <p className='w-full'>
                                {projects[screen].description}
                            </p>
                            <ul className='flex items-center justify-around mt-[1rem]'>
                                {
                                    projects[screen].technologies.map(techno => (
                                        <li key={techno.id} className='w-1/5'>
                                            <img src={techno.image} className='w-full lg:w-1/2 aspect-[4/3] lg:aspect-square' />
                                        </li>
                                   ))
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
            <ChevronRight size={40} color='white' className='cursor-pointer' onClick={() => setScreen(prev => nextScreen(prev))} />
        </div>
    )
}
