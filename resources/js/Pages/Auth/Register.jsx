import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { toast, Toaster } from 'sonner';

export default function Register({ user, admins, message }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        if (message) {
            toast.success('Utilisateur ajouté avec succès')
        }
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    const deleteUser = (id) => {
        if (confirm('Voulez-vous vraiment retirer cet utilisateur ?')) {
            router.visit("/user/delete/" + id, {
                method: 'DELETE',
            });
        }
    }

    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Utilisateurs</h2>}
            className="w-full">
            <Head title="Tous les utilisateurs" />
            <section className='lg:w-4/5 mx-auto'>
                <form id="register_form" className='pl-[5%]' onSubmit={submit}>
                    <h3 className="my-5">Ajouter un utilisateur</h3>
                    <div>
                        <InputLabel htmlFor="name" value="Nom d'utilisateur" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-4/5"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-4/5"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Mot de passe" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-4/5"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirmer le mot de passe" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-4/5"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Ajouter
                        </PrimaryButton>
                    </div>
                </form>
                <div className="sm:w-3/4 lg:w-1/2">
                    <h3 className="my-5">Tous les utilisateurs</h3>
                    <table className="custom_table">
                        <thead>
                            <tr>
                                <th className='hidden lg:block'>Id</th>
                                <th>Nom</th>
                                <th>Adresse mail</th>
                                {
                                    (user.id == 1) &&
                                    <th className='hidden lg:block'>
                                        Supprimer
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin, index) => (
                                <tr key={index}>
                                    <td className='hidden lg:block'>{admin.id}</td>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td className='hidden lg:block'>
                                        {
                                            (user.id == 1) &&
                                            <Trash color={'red'} title="Supprimer ?" onClick={() => deleteUser(admin.id)} />
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {
                message && <Toaster position="bottom-right" richColors />
            }
            <Toaster position="bottom-right" richColors />
        </AuthenticatedLayout>
    );
}
