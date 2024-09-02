import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { CreateCategory } from './Categories/CreateCategory';
import { UpdateCategorieForm } from './Categories/UpdateCategorie';

export default function Categories({ auth, categories, ...props }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Catégories</h2>}
        >
            <Head title="Catégories" />
            <section>
                <CreateCategory />
                <div className="w-3/4 mx-auto lg:w-1/4">
                    <h2 className="text-lg">Toutes les catégories</h2>
                    {
                        categories.length == 0 ?
                            <div>
                                Il semblerait que vous n'ayez aucune catégorie pour le moment ...
                            </div>
                            :
                            <div className="flex flex-wrap gap-x-1.5">
                                {
                                    categories.map(category => (
                                        <div className="w-full lg:w-2/5">
                                            <UpdateCategorieForm key={category.id} category={category} />
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
