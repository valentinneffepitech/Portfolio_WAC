import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { getBottomNavigationActionUtilityClass, TextareaAutosize } from '@mui/material';
import React, { useRef } from 'react'

export const CreateFeedbackForm = () => {

    const { data, setData, post, errors } = useForm({
        author: '',
        role: '',
        content: false
    });

    const nameRef = useRef(null);
    const roleRef = useRef(null);
    const contentRef = useRef(null);


    const submitForm = (e) => {
        e.preventDefault();
        post(route('feedback.new'), {
            preserveScroll: true,
            onSuccess: () => {
                nameRef.current.value = "";
                contentRef.current.value = "";
                roleRef.current.value = '';
            },
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <form className='md:w-[45%] ml-[5%] p-[2%]' onSubmit={(e) => submitForm(e)}>
            <h2 className="text-2xl" >Ajouter un feedback</h2>

            <div className="form-group mt-[3vh]">
                <InputLabel htmlFor="name" value="Auteur du commentaire" />
                <TextInput
                    id="author"
                    type="text"
                    name="author"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('author', e.target.value)}
                    ref={nameRef}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="form-group mt-[2vh]">
                <InputLabel htmlFor="name" value="Poste de l'auteur du feedback" />
                <TextInput
                    id="role"
                    type="text"
                    name="role"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('role', e.target.value)}
                    ref={roleRef}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>


            <div className="form-group mt-[3vh]">
                <InputLabel htmlFor="name" value="Contenu du feedback" />
                <TextareaAutosize
                    id="content"
                    type="text"
                    name="content"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('content', e.target.value)}
                    ref={contentRef}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>


            <button type="submit" className="btn btn-add w-full">
                Ajouter
            </button>
        </form>

    )
}
