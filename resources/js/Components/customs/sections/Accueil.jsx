import React from 'react'
import { ScrollDown } from '../ScrollDown'
import PC from '@/assets/progra.png'

export const Accueil = () => {

    return (
        <section className='py-12 text-white min-h-screen flex flex-col lg:flex-row md:items-center justify-center' id="accueil">
            <div className='flex h-[15vh] lg:h-[40vh]'>
                <h1 className='text-2xl text-right w-1/2 pr-2 py-4 border border-transparent flex justify-end border-r-white lg:text-[4vw] lg:text-right lg:leading-[4vw]'>
                    <span>
                        Valentin NEFF
                    </span>
                </h1>
                <h2 className='w-2/5 pl-2 py-4 flex text-lg items-end justify-start lg:text-[2vw] lg:leading-[3vw]'>
                    <span className='italic'>
                        Développeur Web
                    </span>
                </h2>
            </div>
            <div className='mt-[2rem] flex flex-col items-center gap-10 md:w-1/2'>
                <div className='bounce w-full'>
                    <img src={PC} className='w-full lg:w-4/5 mx-auto' alt="PC qui rebondit"/>
                </div>
                <p className='italic fadeIn-5 text-center'>
                    Rendre simple ce qui semble compliqué
                </p>
            </div>
            <ScrollDown />
        </section>
    )
}
