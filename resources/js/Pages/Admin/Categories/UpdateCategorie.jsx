import React from 'react'
import { useRef, useState } from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Pencil, Trash } from 'lucide-react';
import { router } from '@inertiajs/react'

export const UpdateCategorieForm = ({ category }) => {

    const nameRef = useRef(null)

    const [modifying, setModifying] = useState(false);

    const { data, setData, put, errors, reset } = useForm({
        name: category?.name
    })

    const submitForm = (e) => {
        e.preventDefault();

        put(route('categorie.update', {
            id: category.id
        }), {
            preserveScroll: true,
            onSuccess: () => {
                setModifying(false);
                reset();
            },
            onError: (errors) => console.log(errors)
        })
    }

    const confirmDelete = () => {
        if (confirm('Êtes-vous sûr de vouloir retirer cette catégorie ?')) {
            router.visit("/category/delete/" + category.id, {
                method: 'DELETE'
            })
        }
    }

    return (
        <div>
            {
                modifying ?
                    <form
                        className="p-4 border-gray-400 border my-3"
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
                        <button type="submit" className="btn btn-update">
                            Modifier
                        </button>
                    </form>
                    :
                    <div className="categorie_card p-4 border-gray-400 border my-3">
                        <h3>
                            {category.name}
                        </h3>
                        <div className="categorie_card_buttons">
                            <div className="btn btn-update" onClick={() => setModifying(prev => !prev)}>
                                <Pencil />
                            </div>
                            <div className="btn btn-delete" onClick={() => confirmDelete()}>
                                <Trash />
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}
