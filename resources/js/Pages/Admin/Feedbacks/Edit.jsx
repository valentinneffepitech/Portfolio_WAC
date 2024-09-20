import React, { useRef } from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { TextareaAutosize } from '@mui/material';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Edit({
    auth,
    feedback,
    ...props
}) {
    const { data, setData, put, errors } = useForm({
        author: feedback.author,
        role: feedback.role,
        content: feedback.content
    });

    const nameRef = useRef(null);
    const roleRef = useRef(null);
    const contentRef = useRef(null);

    const modifyFeedback = (e) => {
        e.preventDefault();
        put(route('feedback.update', {
            id: feedback.id
        }), {
            preserveScroll: true,
            onSuccess: () => {
                console.log('gg')
            },
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Modifier feedback de ${feedback.author}`}</h2>}
        >
            <Head title={`Modifier message de ${feedback.author}`} />
            <form className='w-[95%] mx-auto' onSubmit={(e) => modifyFeedback(e)}>

                <div className="form-group mt-[3vh]">
                    <InputLabel htmlFor="name" value="Auteur du commentaire" />
                    <TextInput
                        id="author"
                        type="text"
                        name="author"
                        className="mt-1 block w-full"
                        defaultValue={feedback.author}
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
                        defaultValue={feedback.role}
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
                        defaultValue={feedback.content}
                        onChange={(e) => setData('content', e.target.value)}
                        ref={contentRef}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>


                <button type="submit" className="btn btn-update w-full">
                    Modifier
                </button>
            </form>
        </AuthenticatedLayout>
    )
}
