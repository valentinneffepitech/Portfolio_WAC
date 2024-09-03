import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { CreateTechnology } from './Technologies/CreateTechnology';
import { TechnologieCard } from './Technologies/TechnologieCard';

export default function Technologies({ auth, technologies, categories, ...props }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Technologies</h2>}
        >
            <Head title="Technologies" />
            <section>
                <CreateTechnology categories={categories} />
                <div className="w-3/4 lg:w-1/3 overflow-y-scroll techno_container">
                    {
                        technologies.reverse().map(technology => (
                            <TechnologieCard technology={technology} />
                        ))
                    }
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
