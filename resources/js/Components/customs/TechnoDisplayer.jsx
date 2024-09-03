import React, { useState } from 'react'
import { TechnoProjectsList } from './TechnoProjectsList';

export const TechnoDisplayer = ({
    technologies,
    filter
}) => {

    const [chosen, setChosen] = useState(false);
    const [tab, setTab] = useState(0);

    const chooseTechno = (techno) => {
        setChosen(techno);
        next();
    }

    const next = () => setTab(prev => prev + 1)

    const goBack = () => {
        setTab(prev => prev - 1);
        setTimeout(() => {
            setChosen(false);
        }, 250);
    }

    return (
        <div id="technos" className={`bg-white flex lg:mx-auto lg:w-[90%]`}>
            <div id="technos__list" className={`w-full overflow-x-hidden flex flex-wrap justify-around lg:justify-center lg:gap-[1rem] flex-shrink-0 transition-all duration-300 border-collapse slide-${tab} p-5 items-center`}>
                {
                    technologies.sort((a,b)=>a.category_id-b.category_id).map(techno => {
                        if (filter.length == 0) {
                            return (
                                <div onClick={() => chooseTechno(techno)} className={`flex flex-col items-center w-2/5 justify-center aspect-square transition-all p-4 my-2 md:w-1/4 md:mx-2 lg:w-[15vw] xl:w-1/10 cursor-pointer techno_${techno.name}`}>
                                    <img src={"/" + techno.image} className='w-3/4' />
                                </div>
                            )
                        } else {
                            if (filter.includes(techno.category_id)) {
                                return (
                                    <div onClick={() => chooseTechno(techno)} className={`flex flex-col items-center w-2/5 justify-center aspect-square transition-all p-4 my-2 md:w-1/4 md:mx-2  lg:w-[15vw] xl:w-1/10 cursor-pointer techno_${techno.name}`}>
                                        <img src={"/" + techno.image} className='w-3/4' />
                                    </div>
                                )
                            }
                        }
                    })
                }
            </div>
            <TechnoProjectsList back={goBack} tab={tab} techno={chosen} next={next} />

        </div>
    )
}
