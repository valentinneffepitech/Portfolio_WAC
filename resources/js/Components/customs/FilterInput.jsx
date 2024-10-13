import React, { useState } from 'react'

export const FilterInput = ({categorie, defaultChecked, manageFilter}) => {

    const [checked, setChecked] = useState(defaultChecked.includes(categorie.id))

  return (
    <div className='my-1 md:w-1/3 lg:w-[10%] mx-2'>
        <input type="checkbox" name="filter[]" value={categorie.id} className='h-0 w-0 m-0 p-0 opacity-0' id={`category_${categorie.id}`} onChange={
            () => manageFilter(categorie.id) 
        }/>
        <label htmlFor={`category_${categorie.id}`} className={`pb-6 px-4 w-full flex cursor-pointer transition-all duration-300 border-b-2 ${defaultChecked.includes(categorie.id) ? "border-white": "border-transparent"}`}>
            {categorie.name}
        </label>
    </div>
  )
}
