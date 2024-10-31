import React from 'react'
import { Feedback } from '../Feedback'

export const Temoignages = ({
    feedbacks
}) => {
    return (
        <section className='min-h-screen text-white py-10'>
            <h3 className='text-lg md:text-2xl text-center ml-4 my-6 lg:text-left lg:w-4/5 lg:mx-auto lg:text-4xl'>
                Ce qu'ils ont pensé de moi
            </h3>
            <div className={`flex flex-col min-h-[80vh] mt-4 gap-0 md:flex-wrap ${feedbacks.length > 4 && 'md:flex-row'} lg:justify-around lg:w-4/5 lg:mx-auto`}>
                {
                    feedbacks.map(feedback => (
                        <Feedback key={feedback.id} feedback={feedback} size={feedbacks.length}/>
                    ))
                }
            </div>
        </section>
    )
}
