import React from 'react'
import Cup from '@/assets/ambiance.svg'
import pp from '@/assets/photo.jpg'
import { Link } from '@inertiajs/react'
import { FileDown } from 'lucide-react'

export const Presentation = () => {
    return (
        <section className='min-h-screen py-[1.5rem] lg:flex flex-col justify-evenly' id="presentation">
            <h3 className='text-2xl w-3/4 mx-auto text-center mb-4 font-semibold py-4 glass3 rounded-full'>
                Faisons connaissance
            </h3>
            <div id="accueil__ambiance" className='py-6 lg:w-4/5 lg:flex md:mx-auto md:w-fit flex-col h-100 justify-center items-center'>
                <div className='md:w-[80%] md:flex md:flex-wrap md:justify-center lg:flex-row-reverse justify-between items-center mx-auto lg:w-full'>
                    <div className='py-3 md:w-1/2 lg:w-1/5'>
                        <img src={Cup} className='w-1/2 mx-auto md:w-2/3 lg:w-[20vw]' />
                        <p className='italic text-center w-4/5 mx-auto my-3 py-2 glass3 rounded px-3'>
                            My code is like my coffee, <br />I prefer it without bugs inside
                        </p>
                    </div>
                    <div className='w-4/5 mx-auto md:mx-0 my-3 py-6 px-[1rem] glass3 rounded-xl md:w-1/2'>
                        <p className='px-3 py-1'>
                            Enchanté, moi c'est <span className='font-semibold'>Valentin</span>
                        </p>
                        <p className='px-3 py-1'>
                            Développeur passionné, en perpétuelle recherche de nouveaux défis.
                        </p>
                        <p className='px-3 py-1'>
                            Informations pratiques :
                        </p>
                        <ul className='list-inside my-6 flex flex-col gap-[.5rem] md:text-lg'>
                            <li className='before:content-["\1F527"] before:pr-2'>
                                Mes compétences :
                                <ul className='w-full ml-[15%] md:ml-[5%] flex flex-col gap-2 my-2'>
                                    <li className='before:content-["\1F914"] before:pr-2'>
                                        Concevoir
                                    </li>
                                    <li className='before:content-["\2328"] before:pr-2'>
                                        Déveloper
                                    </li>
                                    <li className='before:content-["\1F5A5"] before:pr-2'>
                                        Déployer
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <a href="./CV_Valentin_Neff.pdf" target="_blank" className='border-2 p-4 m-3 rounded mx-auto w-full justify-center text-center lg:ml-[70%] lg:w-[25%] hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_#fff] flex flex-row items-center'>
                            Voir mon CV
                            <FileDown className='ml-3'/>
                        </a>
                    </div>
                    <img src={pp} alt={"Photo d'un super développeur"}  className='w-1/2 rounded-[20%] mx-auto my-8 md:w-1/4 md:mx-4 lg:w-1/5'/>
                </div>
                <div className='w-4/5 mx-auto my-3 py-2 px-[1rem] glass3 rounded-xl lg:w-full'>
                    <p className='px-3 py-1 text-center text-lg mb-6'>
                        <q className='italic'>Toujours plus loin, toujours plus haut, toujours plus fort...</q>
                    </p>
                    <p className='px-3 py-1'>
                        Le Web étant un éco-système qui varie très rapidement, il est nécessaire de chercher à toujours se tenir au courant des dernières nouveautés.
                    </p>
                    <p className='px-3 py-1'>
                        Mon objectif de tous les jours est d'aller <span className='font-bold'>toujours plus loin</span> en me familiarisant avec de nouvelles technologies, de <span className='font-bold'>viser plus haut</span> en mettant en place des interfaces intuitives et fonctionnelles, et de <span className='font-bold'>devenir toujours plus fort</span> en me confrontant à de nouveaux défis techniques.
                    </p>
                </div>
            </div>
+        </section>
    )
}
