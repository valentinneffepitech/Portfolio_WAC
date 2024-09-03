import { useState, useRef, useEffect } from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Upload } from 'lucide-react';

export const UpdateForm = ({ project }) => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();

    const [preview, setPreview] = useState(false);

    useEffect(() => {
        console.log(data)
    }, [project]);

    const { data, setData, post, errors, reset, processing } = useForm({
        name: project.name,
        description: project.description,
        image: false
    });

    const submitForm = (e) => {
        e.preventDefault();

        post(route('project.update', {
            id: project.id
        }), {
            preserveScroll: true,
            onSuccess: (data) => console.log(data),
            onError: (errors) => console.log(errors)
        })
    }

    const preShowImg = () => {
        setPreview(imageRef.current.files[0])
    }

    return (
        <form className="customForm" onSubmit={(e) => submitForm(e)}>
            <div className="form-group">
                <InputLabel htmlFor="name" value="Nom du projet" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('name', e.target.value)}
                    ref={nameRef}
                    defaultValue={data.name}
                />
                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="form-group">
                <InputLabel htmlFor="description" value="Description du projet" />
                <textarea
                    id="description"
                    type="text"
                    name="description"
                    className="mt-1 block w-full"
                    onChange={(e) => setData('description', e.target.value)}
                    ref={descriptionRef}
                    defaultValue={data.description}
                ></textarea>
                <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="form-group flex flex-col lg:flex-row text-center align-center justify-center">
                <label htmlFor="image" className="flex flex-col justify-evenly">
                    Aperçu du projet
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
            <button type="submit" className="btn btn-update">
                Modifier
            </button>
        </form>
    )
}
