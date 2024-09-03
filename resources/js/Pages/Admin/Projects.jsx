import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { CreateProjectForm } from './Projects/CreateProjectForm';
import { ProjectCard } from '@/Components/customs/ProjectCard';

export default function Projects({ auth, projects, ...props }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projets</h2>}
        >
            <Head title="Projets" />
            <section>
                <CreateProjectForm />
                <div className='w-3/4 lg:w-1/2'>
                    <h2 className="text-2xl mb-4 underline">
                        Liste des projets
                    </h2>
                    <div id="projects_list">
                        {
                            projects.reverse().map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
