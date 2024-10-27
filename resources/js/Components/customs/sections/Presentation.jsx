import React from 'react'
import Cup from '@/assets/ambiance.svg'
import pp from '@/assets/photo.jpg'
import { FileDown } from 'lucide-react'
import { TextAppear } from '../TextAppear'

export const Presentation = () => {
    return (
        <section className='min-h-screen py-[1.5rem] lg:flex flex-col justify-evenly' id="presentation">
            <h3 className='text-2xl w-3/4 mx-auto text-center mb-4 font-semibold py-4 glass3 rounded-full'>
                Faisons connaissance
            </h3>
            <div id="accueil__ambiance" className='py-6 lg:w-4/5 lg:flex md:mx-auto md:w-fit flex-col h-100'>
                <div className='md:w-[80%] md:flex md:flex-wrap md:justify-center lg:flex-row-reverse lg:justify-between justify-between items-center mx-auto lg:w-full'>
                    <div className='py-3 md:w-1/2 lg:w-1/5 lg:py-6 lg:my-3'>
                        <img src={Cup} className='w-1/2 mx-auto md:w-2/3 lg:w-[20vw]' alt='Tasse de café animée fumante'/>
                        <p className='italic text-center w-4/5 mx-auto my-3 py-2 glass3 rounded px-3'>
                            My code is like my coffee, <br />I prefer it without bugs inside
                        </p>
                    </div>
                    <div className='w-4/5 mx-auto md:mx-0 my-3 py-6 lg:px-[1rem] rounded-xl md:w-1/2'>
                            <div className='mx-auto md:mx-0 my-3 py-6 px-[1rem] glass3 rounded-xl w-full'>
                                <p className='px-3 py-1'>
                                    Enchanté, moi c'est <span className='font-semibold'>Valentin</span>
                                </p>
                                <p className='px-3 py-1'>
                                    Développeur passionné, en perpétuelle recherche de nouveaux défis.
                                </p>
                                <a href="./CV_Valentin_Neff.pdf" target="_blank" className='border-2 p-4 m-3 rounded mx-auto w-full justify-center text-center md:w-fit font-mono lg:ml-[60%] lg:w-[40%] hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_#fff] flex flex-row items-center'>
                                    En savoir plus
                                    <FileDown className='ml-3'/>
                                </a>
                            </div>
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
