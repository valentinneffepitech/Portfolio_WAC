import React from 'react'
import { Feedback } from '../Feedback'

export const Temoignages = ({
    feedbacks
}) => {
    return (
        <section className='min-h-screen text-white py-10'>
            <h3 className='text-2xl text-center ml-4 my-6'>
                Ce qu'ils ont pensé de moi
            </h3>
            <div className='flex flex-col min-h-[80vh] mt-4 gap-0 md:flex-wrap md:flex-row lg:justify-around'>
                {
                    feedbacks.map(feedback => (
                        <Feedback key={feedback.id} feedback={feedback} />
                    ))
                }
            </div>
        </section>
    )
}
