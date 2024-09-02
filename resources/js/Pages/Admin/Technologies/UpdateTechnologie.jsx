import React from 'react'
import { Head, Link, router, useForm } from '@inertiajs/react'
import { useRef, useState } from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Upload } from 'lucide-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function UpdateTechnologie({ auth, technology, categories }) {
    const nameRef = useRef(null)

    const [modifying, setModifying] = useState(false);

    const { data, setData, post, errors, reset } = useForm({
        name: technology?.name,
        image: false,
        category: technology.category_id
    })

    const submitForm = (ev) => {
        ev.preventDefault();
        post(route('technologies.update', technology.id), {
            onSuccess: () => {
                setModifying(false);
                reset();
            },
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Modifier&nbsp;{technology.name}</h2>}
        >
            <Head title={"Modifier " + technology.name} />
            <form
                className="p-4 border-gray-400 border my-10 container mx-auto"
                onSubmit={
                    (e) => submitForm(e)
                }
            >
                <div className="form-group">
                    <InputLabel value="Nom de la catégorie" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                        defaultValue={data.name}
                        ref={nameRef} />
                    <InputError message={errors.name} className='mt-2' />
                </div>
                <div className="form-group mt-4">
                    <InputLabel value="Catégorie" />
                    <select defaultValue={technology.category?.id} onChange={(e) => setData('category', e.target.value)}>
                        {
                            categories.map(category => {
                                return (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="image">
                        <Upload size={30} />
                    </label>
                    <input
                        id="image"
                        type="file"
                        name="image"
                        onChange={(e) => setData('image', e.target.files[0])}
                    />
                    <InputError message={errors.image} className="mt-2" />
                </div>
                <button type="submit" className="btn btn-update">
                    Modifier
                </button>
            </form>
            <img src={"/" + technology.image} alt={technology.name} className="w-1/6 mx-auto" />
        </AuthenticatedLayout>
    )
}
