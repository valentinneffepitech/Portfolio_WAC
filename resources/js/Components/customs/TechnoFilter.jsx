import React, { useEffect, useRef, useState } from 'react'
import { FilterInput } from './FilterInput'

export const TechnoFilter = ({
    categories,
    defaultChecked,
    reset,
    manageFilter
}) => {

    return (
        <form className='py-6 lg:px-[2%] lg:w-[80%] lg:mx-auto text-white'>
            <h2 className='px-4 lg:text-[1.4rem] lg:underline underline-offset-4'>Filtrer par catégorie&nbsp;:</h2>
            <div id="technos__filter" className='md:flex justify-center flex-wrap'>
                <div className='my-1 md:w-1/3 lg:w-1/5 mx-2'>
                    <input type="checkbox" name="filter[]" value={''} className='h-0 w-0 m-0 p-0 opacity-0' id={`category_0`} onChange={
                        () => reset()
                    }/>
                    <label htmlFor={`category_0`} className={`py-6 px-4 w-full flex cursor-pointer transition-all duration-300 border-b-2 ${defaultChecked.length === 0 ? "border-white": "border-transparent"}`}>
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
