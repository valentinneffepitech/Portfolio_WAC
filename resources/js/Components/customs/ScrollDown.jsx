import { ChevronDown } from 'lucide-react'
import React from 'react'
import Chevrons from '@/assets/scroll.svg'

export const ScrollDown = () => {
    return (
        <div className='absolute bottom-6 right-4 lg:right-[4vw] lg:bottom-[8vh] flex flex-col items-center w-20 appear-down-4 overflow-visible'>
            <p className='text-center mb-2 text-[.9rem]'>
                Scroll Down
            </p>
            <img src={Chevrons} className='w-[50%] mx-auto slide-down'/>
        </div>
    )
}
