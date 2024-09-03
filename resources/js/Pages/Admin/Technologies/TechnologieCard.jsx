import { Pencil, Trash, Upload } from 'lucide-react'
import React from 'react'
import { Link, router } from '@inertiajs/react'

export const TechnologieCard = ({ technology }) => {


    const confirmDelete = () => {
        if (confirm('Êtes-vous sûr de vouloir retirer cette catégorie ?')) {
            router.visit('/techno/delete/' + technology.id, {
                method: "DELETE"
            })
        }
    }

    return (
        <div className="technologie_card flex align-middle border my-4 border-2 py-4 px-2 border-gray-800 justify-evenly">
            <img className="w-1/4 mx-8" src={"/" + technology.image} />
            <div className="flex flex-col justify-around">
                <h3 className="text-xl">{technology.name}</h3>
                <div className="flex gap-x-1.5">
                    <Link href={"/technologie/edit/" + technology.id} className="btn btn-update" onClick={(ev) => setModifying(prev => !prev)}>
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
