import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { CreateFeedbackForm } from './Feedbacks/CreateFeedbackForm';
import { Pencil, Trash } from 'lucide-react';

export default function Feedback(
    {
        auth,
        feedbacks,
        ...props
    }) {

    const confirmDelete = (id) => {
        if (confirm('Êtes-vous sûr de vouloir retirer ce feedback ?')) {
            router.visit('/feedback/delete/' + id, {
                method: "DELETE"
            })
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Feedbacks</h2>}
        >
            <Head title="Feedbacks" />
            <section>
                <CreateFeedbackForm />
                <div className='w-3/4 lg:w-1/2'>
                    {feedbacks.map(feedback => (
                        <div key={feedback.id} className="w-[90%] bg-white border-2 p-4 border-black mb-3">
                            <p>
                                {
                                    feedback.content
                                }
                            </p>
                            <p className='italic text-right'>{feedback.author}, {feedback.role}</p>
                            <div className='flex justify-end gap-3'>
                                <Link href={"/feedback/edit/" + feedback.id} className="btn btn-update">
                                    <Pencil />
                                </Link>
                                <div className="btn btn-delete" onClick={() => confirmDelete(feedback.id)}>
                                    <Trash />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
