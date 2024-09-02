import React from 'react'
import Cup from '@/assets/ambiance.svg'

export const Presentation = () => {
    return (
        <section className='min-h-screen py-[1.5rem]' id="presentation">
            <h3 className='text-2xl w-3/4 mx-auto'>
                Faisons connaissance
            </h3>

            <div id="accueil__ambiance" className='mt-3 lg:w-fit lg:flex md:mx-auto md:w-fit flex-col h-100 justify-center'>
                <img src={Cup} className='w-1/2 mx-auto mt-6 md:w-1/3 lg:w-[20vw]' />
                <p className='italic text-center text-black text-lg w-4/5 mx-auto appear-down-3'>
                    My code is like my coffee, <br />I prefer it without bugs inside
                </p>
            </div>
        </section>
    )
}
