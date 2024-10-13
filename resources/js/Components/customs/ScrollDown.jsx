import { ChevronDown } from 'lucide-react'
import React from 'react'
import Chevrons from '@/assets/scroll.svg'

export const ScrollDown = () => {
    return (
        <div className='absolute bottom-6 right-4 lg:right-[4vw] lg:bottom-[8vh] flex flex-col items-center w-20 overflow-hidden'>
            <p className='text-[.7rem] text-center mb-2 md:text-[.9rem] appear-down-4'>
                Scroll Down
            </p>    
            <img src={Chevrons} className='w-[30%] md:w-[40%] mx-auto slide-down' alt='double chevrons'/>
        </div>
    )
}
