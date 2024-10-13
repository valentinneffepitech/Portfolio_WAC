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
                <div className='w-[80%] mx-auto flex flex-col items-center overflow-y-scroll lg:gap-4'>
                    <img src={projects[screen].image} className='w-[90%] lg:w-[60%] cursor-pointer mb-2 lg:mb-0 aspect-[4/3] lg:aspect-auto border-b-gray-300 border-b-[1px] lg:border-b-0 max-h-[90vh]' title={projects[screen].name} />
                    <div className='text-white glass3 w-[90%] lg:w-[60%] mx-auto rounded p-6' dangerouslySetInnerHTML={{__html: projects[screen].description}}></div>
                        <ul className='flex items-center justify-center mt-[1rem] w-full px-6 self-end gap-6'>
                        {
                            projects[screen].technologies.map(techno => (
                                <li key={techno.id} className='w-1/5 lg:w-[8%]'>
                                    <img src={techno.image} className='w-full aspect-square' title={techno.name}/>
                                </li>
                            ))
                        }
                        </ul>
                </div>
            <ChevronRight size={40} color='white' className='cursor-pointer' onClick={() => setScreen(prev => nextScreen(prev))} />
        </div>
    )
}
