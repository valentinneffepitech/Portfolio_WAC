import { useRef } from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export const CreateCategory = () => {

    const nameRef = useRef(null);

    const { data, setData, post, errors } = useForm({
        name: ''
    });

    const submitForm = (e) => {
        e.preventDefault();
        post(route('category.new'), {
            preserveScroll: true,
            onSuccess: () => {
                nameRef.current.value = ""
            },
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <form className="customForm" onSubmit={(e) => submitForm(e)}>
            <h3 className="text-2xl" >Ajouter une catégorie</h3>
            <div className="form-group">
                <InputLabel htmlFor="name" value="Nom de la catégorie" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('name', e.target.value)}
                    ref={nameRef}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <button type="submit" className="btn btn-add">
                Ajouter
            </button>
        </form>
    )
}
