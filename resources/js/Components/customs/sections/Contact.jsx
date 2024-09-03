import { TextareaAutosize } from '@mui/material';
import React, { useRef, useState } from 'react'
import { Loader } from '../Loader';
import { Toast } from '../Toasts';
import { Github } from '../svg/Github';
import { Linkedin } from '../svg/Linkedin';
import { HandShake } from '../svg/HandShake';

export const Contact = () => {

    const [contact, setContact] = useState({
        message: "",
        email: "",
        name: ""
    });

    const [status, setStatus] = useState(false);

    const resetStatus = () => setStatus(false);

    const [isLoading, setIsLoading] = useState(false);

    const email = useRef();
    const message = useRef();
    const name = useRef();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setIsLoading(true);
        let form = new FormData();
        form.append('name', contact.name);
        form.append('email', contact.email);
        form.append('message', contact.message);
        try {
            fetch('/api/contact', {
                method: "POST",
                body: form
            }).then(res => res.json()).then(data => {
                setIsLoading(false);
                setStatus({
                    type: 'success',
                    message: "Votre message m'est bien parvenu."
                })
                email.current.value = "";
                name.current.value = "";
                message.current.value = "";
            });
        } catch (error) {
            setIsLoading(false);
            setStatus({
                type: 'error',
                message: "Une erreur semble s'être glissée dans votre formulaire!"
            })
        }
    }

    const handleChange = (ev) => {
        setContact(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value
        }))
    }

    return (
        <section id="contact" className='min-h-screen text-white bg-[#252525] flex flex-col md:justify-center items-center'>
            <h2 className='text-[1.5rem] mt-10'>
                Intéressé par une collaboration&nbsp;?
            </h2>
            <h3 className='text-center mt-3 w-4/5 text-[1.1rem]'>
                Si c'est le cas, n'hésitez-pas à me laisser un message et je reviendrai vers vous dès que possible.
            </h3>
            <div className='w-[90%] lg:flex lg:mt-[2rem]'>
                <form method='POST' action='/api/contact' onSubmit={(ev) => handleSubmit(ev)} className='w-full rounded mt-4 flex flex-col lg:p-[2rem] lg:border lg:border-transparent lg:border-r-white lg:border-r-2'>
                    <input ref={name} onChange={(ev) => handleChange(ev)} required type='text' name='name' defaultValue={contact.name} placeholder='Nom / Prénom' className='placeholder-blue-300 bg-black text-#f6f6f6 ' />
                    <input ref={email} onChange={(ev) => handleChange(ev)} required type='email' name='email' defaultValue={contact.email} placeholder='Email' className='placeholder-blue-300 bg-black text-#f6f6f6 mt-4' />
                    <TextareaAutosize ref={message} onChange={(ev) => handleChange(ev)} required className='placeholder-blue-300 bg-black text-#f6f6f6 mt-4' placeholder='Votre message' defaultValue={contact.message} name='message' minRows={2} />
                    {
                        !isLoading ?
                            <button className={`mt-4 py-2 border font-bold text-blue-400 border-blue-400 transition-all duration-300 rounded hover:bg-blue-400 hover:text-white ${isLoading && 'disabled'} w-full md:w-fit md:py-2 md:px-[1.5rem] mx-auto`} >
                                Envoyer
                            </button>
                            :
                            <Loader />
                    }
                </form>
                <HandShake className='lg:w-full hidden lg:block' size={250} fill='#fff' />
            </div>
            <h3 className='mt-10 underline underline-offset-4 text-lg'>Retrouvez-moi également sur les réseaux&nbsp;:</h3>
            <div className='mt-10 flex w-full justify-center gap-[10%] lg:gap-[5%]'>
                <Github className='rounded w-16 h-fit' />
                <Linkedin stroke='white' fill='white' className='bg-[#0A66C2] p-1 rounded w-16 h-fit' />
            </div>
            {
                status &&
                <Toast message={status.message} type={status.type} reset={resetStatus} />
            }
        </section>
    )
}
