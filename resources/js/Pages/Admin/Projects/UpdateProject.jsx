import React, { useState } from 'react'
import { Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { UpdateForm } from './components/UpdateForm'
import InputLabel from '@/Components/InputLabel';
import Switch from '@mui/material/Switch';
import PrimaryButton from '@/Components/PrimaryButton';

export default function UpdateProject({ auth, project, technologies }) {

    const [technoList, setTechnoList] = useState(
        project.technologies.map(tech => tech.id)
    );

    const modifyTechnos = (e) => {
        e.preventDefault();
        router.visit('/project/technologies', {
            method: 'PUT',
            data: {
                id: project.id,
                technologies: technoList
            }
        })
    }

    const manageInput = (ev) => {
        if (ev.target.checked) {
            setTechnoList([...technoList, parseInt(ev.target.value)])
        } else {
            setTechnoList(technoList.filter(tech => tech !== parseInt(ev.target.value)))
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{`Modifier ${project.name}`}</h2>}
        >
            <Head title={`Modifier ${project.name}`} />
            <section className='container mx-auto items-center p-12'>
                <UpdateForm project={project} />
                <div className="lg:w-2/5 mx-auto">
                    <div id="update_actual">
                        <div id="update_actual_head" className="border-r-2 border-grey-200 h-100">
                            <img src={"/" + project.image} />
                        </div>
                        <div id="update_actual_body" className="bg-white p-5 flex flex-col justify-evenly">
                            <h2 className="text-2xl">
                                {project.name}
                            </h2>
                            <p>
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <form className='container mx-auto p-12' onSubmit={(e) => modifyTechnos(e)}>
                <h2 className='text-2xl text-slate-900'>Quelles technologies pour ce projet ?</h2>
                <div className='flex flex-col lg:flex-row items-center flex-wrap gap-10'>
                    {
                        technologies.map((tech, index) => {
                            return (
                                <div key={index} className='flex flex-row gap-5 justify-center w-1/5 items-center my-6'>
                                    <InputLabel className='mb-0' value={tech.name} htmlFor={tech.name} />
                                    <Switch
                                        id={tech.name}
                                        defaultChecked={technoList.includes(tech.id)}
                                        value={tech.id}
                                        onChange={(ev) => manageInput(ev)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <PrimaryButton>Confirmer</PrimaryButton>
            </form>
        </AuthenticatedLayout>
    )
}
