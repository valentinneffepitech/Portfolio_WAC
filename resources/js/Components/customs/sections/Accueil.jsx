import React from 'react'
import { ScrollDown } from '../ScrollDown'
import { Character } from '../Character'

export const Accueil = () => {
    return (
        <section className='py-12 text-white min-h-screen flex flex-col lg:flex-row lg:items-center justify-center' id="accueil">
            <div className='flex h-[15vh] lg:h-[40vh]'>
                <h1 className='text-2xl w-1/2 pr-2 py-4 border border-transparent flex justify-end border-r-white lg:text-[4vw] lg:text-right lg:leading-[4vw]'>
                    <span>
                        Valentin NEFF
                    </span>
                </h1>
                <h2 className='w-1/3 pl-2 py-4 flex text-lg items-end justify-start lg:text-[2vw] lg:leading-[3vw]'>
                    <span className='italic'>
                        Développeur Web
                    </span>
                </h2>
            </div>
            <Character className={'w-1/2 mx-auto mt-6 md:w-1/3 lg:w-[20vw]'} />
            <ScrollDown />
        </section>
    )
}
