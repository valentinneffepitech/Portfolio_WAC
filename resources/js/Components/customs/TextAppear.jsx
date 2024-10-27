import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

export const TextAppear = ({list}) => {
    const [index, setIndex] = useState(0);

    const textRef = useRef(null)

    const handleNext = ()=>{
        textRef.current.style.opacity = 0
        setTimeout(()=>{
            textRef.current.style.opacity = 1
            setIndex((prevIndex) => list[prevIndex + 1] ? prevIndex + 1 : 0);
        }, 200)
    }

    useEffect(()=>{
        setInterval(()=>handleNext(), 2500)
    }, [])

    return (
        <div className='text-white rounded-lg mb-4'>
            <p ref={textRef} className='italic w-fit transition-opacity duration-200 px-3 mx-auto my-4 uppercase Oxanium font-extrabold tracking-wider text-[1.8rem]'>{list[index]}</p>
        </div>
    )
}
