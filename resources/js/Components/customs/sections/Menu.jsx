import React from 'react'
import logo from '@/assets/mylogo.svg'

export const Menu = ({
    close
}) => {
    const fields = [
        {
            title: "Accueil",
            id: "accueil"
        },
        {
            title: "Présentation",
            id: "presentation"
        },
        {
            title: "Ma formation",
            id: "formation"
        },
        {
            title: "Mes projets",
            id: "projets"
        },
        {
            title: "Me contacter",
            id: "contact"
        }
    ]
    return (
        <nav className={`bg-black fixed top-0 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 fadeIn-1 z-10 w-full`}>
            <img src={logo} alt='Valentin Neff' className='w-1/4 md:w-1/5 lg:w-[10%]' />
            <ul className='flex flex-col gap-4'>
                {
                    fields.map(field => (
                        <li key={field.id} className='menu__link overflow-hidden'>
                            <a href={`#${field.id}`} className='text-white' onClick={() => close()}>
                                {field.title}
                            </a>
                            <hr></hr>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
