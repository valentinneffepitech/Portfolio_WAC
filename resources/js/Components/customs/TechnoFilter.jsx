import React, { useEffect } from 'react'

export const TechnoFilter = ({
    categories,
    manageFilter
}) => {

    return (
        <form className='bg-white py-6 lg:px-[5%] lg:mx-auto'>
            <h2 className='px-4 lg:text-[1.4rem] lg:underline underline-offset-4'>Filtrer par catégorie&nbsp;:</h2>
            <div id="technos__filter" className='md:flex justify-center flex-wrap'>
                {
                    categories.map(categorie => {
                        return (
                            <div className='my-1 md:w-1/3 lg:w-1/5 mx-2'>
                                <input type="checkbox" name="filter[]" value={categorie.id} className='h-0 w-0 m-0 p-0 opacity-0' id={`category_${categorie.id}`} onChange={(e) => {
                                    manageFilter(e.target.value);
                                }} />
                                <label htmlFor={`category_${categorie.id}`} className='py-6 px-4 w-full border flex cursor-pointer transition-all duration-300'>
                                    {categorie.name}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        </form>
    )
}
