import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import MyLogo from '@/assets/mylogo.svg'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className='min-h-screen flex flex-col lg:flex-row lg:w-3/4 lg:mx-auto items-center justify-center'>
                <img src={MyLogo} className='w-1/3 lg:w-1/5 mx-auto mb-12' />
                <div className='w-3/4'>
                    <div>
                        <InputLabel htmlFor="email" value="Email" className='text-white text-xl lg:text-lg'/>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email && 'Veuillez vérifier vos identifiants'} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Mot de passe" className='text-white text-xl lg:text-lg'/>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-center mt-6">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Connexion
                        </PrimaryButton>
                    </div>
                </div>

            </form>
        </GuestLayout>
    );
}
