import React, { useEffect, useState } from 'react'
import { TechnoFilter } from '../TechnoFilter'
import { TechnoDisplayer } from '../TechnoDisplayer'
import { Github } from '../svg/Github'

export const Techno = ({
    categories,
    projects
}) => {

    const [isActive, setIsActive] = useState([]);

    useEffect(()=>{
        console.log(isActive)
    }, [isActive])

    const manageFilter = (id) => {
        setIsActive(prev=>prev.includes(id) ? prev.filter(cat=>cat.id != id) : [...prev, id])
    }

    const resetFilter = () => {
        setIsActive([])
    }

    return (
        <section id="projets" className='min-h-screen bg-[#252525] block pt-6'>
            <h3 className='text-white text-3xl mb-4 w-3/4 mx-auto md:mx-0 md:text-center md:w-full py-6 lg:text-left lg:text-5xl lg:w-4/5 lg:mx-auto'>Quelques réalisations</h3>
            <TechnoFilter categories={categories} defaultChecked={isActive} manageFilter={manageFilter} reset={resetFilter}/>
            <TechnoDisplayer projects={projects} categories={isActive}/>
            <a href='https://github.com/valentinneffepitech/Portfolio' className='flex text-white items-center mx-auto border-2 rounded w-fit border-[#f6f6f6] transition-all duration-200 hover:text-[#1d1d1d] hover:bg-[#f6f6f6] text-center py-4 px-6 mb-[2rem] hover:shadow-[0_0_20px_#fff]' target='_blank'>
                Retrouvez tous mes projets sur Github <Github stroke={'#1d1d1d'} className='w-8 h-fit ml-3' id="github_link" />
            </a>
        </section>
    )
}
