import React from 'react'
import LogoWac from '@/assets/wac.svg'
import Corgi from '@/assets/corgi.svg'
import LogoGrad from '@/assets/grad.svg'

export const Formations = () => {
    return (
        <section className='min-h-screen bg-[#252525] py-6 lg:px-[10%] mx-auto' id="formation">
            <h3 className='text-white text-3xl mb-4 w-3/4 mx-auto md:mx-0 md:text-center md:w-full'>Mon parcours</h3>
            <div className='flex flex-col md:justify-between lg: items-center md:flex-row'>
                <p className='w-3/4 md:w-1/2 mx-auto md:mx-0 md:p-[1rem] text-white md:border-t-0 pt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa sem, pharetra eget lorem quis, ullamcorper egestas turpis. Mauris sit amet lectus bibendum metus dictum rhoncus. Nulla eget purus non lectus venenatis posuere. Nam mattis, urna sit amet congue aliquam, nisi justo pellentesque est, vitae venenatis orci elit ut dolor. Integer nec mattis lectus. Nullam metus erat, viverra sit amet placerat eu, elementum quis quam. Phasellus aliquet auctor tempus. Donec id massa nunc. Praesent at urna velit. Aenean euismod blandit sollicitudin. Sed volutpat purus quis laoreet lobortis.
                </p>
                <img src={LogoWac} className='w-3/4 mx-auto md:w-1/3 lg:w-1/4 my-6' />
            </div>
            <div className='flex flex-col md:justify-between md:items-center md:flex-row-reverse'>
                <p className='w-3/4 md:w-1/2 mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa sem, pharetra eget lorem quis, ullamcorper egestas turpis. Mauris sit amet lectus bibendum metus dictum rhoncus. Nulla eget purus non lectus venenatis posuere. Nam mattis, urna sit amet congue aliquam, nisi justo pellentesque est, vitae venenatis orci elit ut dolor. Integer nec mattis lectus. Nullam metus erat, viverra sit amet placerat eu, elementum quis quam. Phasellus aliquet auctor tempus. Donec id massa nunc. Praesent at urna velit. Aenean euismod blandit sollicitudin. Sed volutpat purus quis laoreet lobortis.
                </p>
                <img src={Corgi} className='w-3/4 mx-auto scale-125 lg:scale-100 md:w-2/5 lg:w-1/4 hidden md:block' />
            </div>
            <hr className='w-3/4 mx-auto my-3 md:hidden mt-6' />
            <div className='flex flex-col md:justify-between md:flex-row-reverse'>
                <img src={LogoGrad} className='w-1/2 md:w-1/3 lg:w-1/3 mx-auto my-3' />
                <p className='w-3/4 md:w-1/2 md:p-[1rem] mx-auto md:mx-0 text-white border border-transparent pt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa sem, pharetra eget lorem quis, ullamcorper egestas turpis. Mauris sit amet lectus bibendum metus dictum rhoncus. Nulla eget purus non lectus venenatis posuere. Nam mattis, urna sit amet congue aliquam, nisi justo pellentesque est, vitae venenatis orci elit ut dolor. Integer nec mattis lectus. Nullam metus erat, viverra sit amet placerat eu, elementum quis quam. Phasellus aliquet auctor tempus. Donec id massa nunc. Praesent at urna velit. Aenean euismod blandit sollicitudin. Sed volutpat purus quis laoreet lobortis.
                </p>
            </div>
        </section>
    )
}
