import { useRef, useState } from 'react'
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Upload } from 'lucide-react';

export const CreateProjectForm = () => {

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

  const [preview, setPreview] = useState(false);


  const preShowImg = () => {
    setPreview(imageRef.current.files[0])
  }

  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
    image: false
  });

  const submitForm = (e) => {
    e.preventDefault();
    post(route('project.new'), {
      preserveScroll: true,
      onSuccess: () => {
        nameRef.current.value = "";
        descriptionRef.current.value = "";
      },
      onError: (errors) => console.log(errors)
    })
  }

  return (
    <form className="customForm" onSubmit={(e) => submitForm(e)}>
      <h2 className="text-2xl" >Ajouter un nouveau projet</h2>

      <div className="form-group">
        <InputLabel htmlFor="name" value="Nom du projet" />
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

      <div className="form-group">
        <InputLabel htmlFor="description" value="Description du projet" />
        <textarea
          id="description"
          type="text"
          name="description"
          className="mt-1 block w-full"
          onChange={(e) => setData('description', e.target.value)}
          ref={descriptionRef}
        ></textarea>
        <InputError message={errors.description} className="mt-2" />
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
    </form>
  )
}
