import React from 'react'

export const Feedback = ({
    feedback
}) => {
    return (
        <div className='w-[90%] mx-auto py-4 border-t-2 border-b-2 border-collapse md:mt-4 md:w-2/5 md:flex md:flex-col md:justify-between lg:w-[33%] lg:mx-3 lg:max-h-[40vh]'>
            <p className='md:my-[1rem]'>
                {
                    feedback.content
                }
            </p>
            <p className='text-right italic mt-3'>
                {
                    feedback.author
                },&nbsp;
                {
                    feedback.role
                }
            </p>
        </div>
    )
}
