import React from 'react'

export const Feedback = ({
    feedback,
    size
}) => {
    return (
        <div className={`w-[90%] mx-auto py-4 ${size > 4 && "border-t-2 md:flex md:flex-col md:w-2/5 lg:w-[30%]"} border-b-2 md:mt-4 md:justify-between lg:mx-3`}>
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
