import { useForm } from '@inertiajs/react';
import React from 'react';
import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Upload } from 'lucide-react';

export const CreateTechnology = ({ categories }) => {

    const nameRef = useRef(null)
    const imageRef = useRef(null)

    const { data, setData, post, errors } = useForm({
        name: '',
        image: false,
        category: categories.length != 0 ? categories[0].id : null
    })

    const [preview, setPreview] = useState(false);

    const preShowImg = () => {
        setPreview(imageRef.current.files[0])
    }

    const submitForm = (e) => {
        e.preventDefault();
        post(route('techno.new'), {
            preserveScroll: true,
            onSuccess: () => {
                nameRef.current.value = "",
                    imageRef.current.value = null,
                    setPreview(false);
            },
            onError: (errors) => console.log(errors)
        })
    }

    return (
        <form className="customForm" onSubmit={(e) => submitForm(e)}>
            <h3 className="text-2xl" >Ajouter une technologie</h3>

            <div className="form-group">
                <InputLabel htmlFor="name" value="Nom" />
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

            <div className="form-group mt-4">
                <InputLabel value="Catégorie" />
                <select onChange={(e) => setData('category', e.target.value)}>
                    {
                        categories.map(category => {
                            return (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="image">
                    <p>Aperçu du projet</p>
                    <Upload size={30} />
                </label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    onChange={(e) => {
                        setData('image', e.target.files[0]);
                        preShowImg();
                    }}
                    ref={imageRef}
                />
                <div id="preview">
                    {
                        preview ?
                            <img src={URL.createObjectURL(preview)} alt="image" />
                            :
                            <div>
                                Votre aperçu sera affiché ici
                            </div>
                    }
                </div>
                <InputError message={errors.image} className="mt-2" />
            </div>
            <button type="submit" className="btn btn-add">
                Ajouter
            </button>
        </form >
    )
}
