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
            <img src={projects[screen].image} className='w-[90%] lg:w-[75%] cursor-pointer mb-2 lg:mb-0 aspect-[4/3] lg:aspect-auto border-b-gray-300 border-b-[1px] lg:border-b-0 max-h-[90vh]' />
            <ChevronRight size={40} color='white' className='cursor-pointer' onClick={() => setScreen(prev => nextScreen(prev))} />
        </div>
    )
}
