import React from 'react'
import { FilterInput } from './FilterInput'

export const TechnoFilter = ({
    categories,
    defaultChecked,
    reset,
    manageFilter
}) => {

    return (
        <form className='py-6 lg:px-[2%] lg:w-[80%] lg:mx-auto text-white bg-[#1d1d1d] md:bg-transparent mt-4'>
            <h2 className='px-4 lg:text-[1.4rem] text-[1.2rem] mb-3'>Filtrer&nbsp;:</h2>
            <div id="technos__filter" className='ml-2 md:flex md:border-t-2 md:border-b-2 flex-wrap my-4 md:py-4'>
                <div className='my-1 md:w-1/6 lg:w-[10%] mx-2 md:flex md:h-fit'>
                    <input type="checkbox" name="filter[]" value={''} className='h-0 w-0 m-0 p-0 opacity-0' id={`category_0`} onChange={
                        () => reset()
                    }/>
                    <label htmlFor={`category_0`} className={`py-6 px-4 w-full flex cursor-pointer transition-all border-2 border-transparent hover:border-b-white duration-300 ${defaultChecked.length === 0 ? "bg-white text-[#1d1d1d]": "border-transparent"}`}>
                        Tous
                    </label>
                </div>
                {
                    categories.map(categorie => {
                        return (
                            <FilterInput key={categorie.id} categorie={categorie} defaultChecked={defaultChecked} manageFilter={manageFilter}/>
                        )
                    })
                }
            </div>
        </form>
    )
}
