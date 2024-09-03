import React from 'react'
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react'
import { Pencil, Trash } from 'lucide-react';

export const ProjectCard = ({ project, ...props }) => {

    const confirmDelete = () => {
        let confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce projet ?");
        if (!confirmation) {
            return;
        }
        router.visit("/project/delete/" + project.id, {
            method: 'DELETE'
        })
    }

    return (
        <div className='project_card'>
            <div className="project_card_head">
                <img src={"/" + project.image} alt={`Projet ${project.name}`} />
            </div>
            <div className="project_card_body">
                <h2 className='underline'>{project.name}</h2>
                <p>{project.description}</p>
                <h3 className='underline text-lg'>Technologies utilisées:</h3>
                <ul className='flex flex-wrap items-center gap-6 lg:gap-12 mb-3 '>
                    {
                        project.technologies.map(tech => (
                            <li className="mt-4" key={'tech' + tech.id}>
                                <Link href={"/technologie/edit/" + tech.id} title={'Modifier ' + tech.name}>
                                    <img alt={tech.name} src={'/' + tech.image} className='w-20 lg:w-40' />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="project_card_body_links">
                    <Link href={`/project/edit/${project.id}`} className="btn btn-update">
                        <Pencil />
                    </Link>
                    <div className="btn btn-delete" onClick={() => confirmDelete()}>
                        <Trash />
                    </div>
                </div>
            </div>
        </div>
    )
}
