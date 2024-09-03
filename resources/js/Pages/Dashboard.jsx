import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';

export default function Dashboard({ auth }) {

    const categories = [
        {
            id: 1,
            name: 'Projets',
            route: 'projects'
        },
        {
            id: 2,
            name: 'Catégories',
            route: 'categories'
        },
        {
            id: 3,
            name: 'Technologies',
            route: 'technologies'
        }
    ]

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mon espace administrateur</h2>}
        >
            <Head title="BackOffice" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900 text-xl">
                        Bienvenue&nbsp;
                        <span className='font-bold'>
                            {auth.user.name}
                        </span>
                    </div>
                    <div className="p-6 text-gray-600 text-lg flex">
                        <p>Sélectionner une catégorie afin de modifier le contenu du site</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
