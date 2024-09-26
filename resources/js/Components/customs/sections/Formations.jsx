import React from 'react'
import LogoWac from '@/assets/wac.svg'
import Corgi from '@/assets/corgi.svg'
import LogoGrad from '@/assets/grad.svg'

export const Formations = () => {
    return (
        <section className='min-h-screen bg-[#000] py-6 lg:px-[10%] mx-auto' id="formation">
            <h3 className='text-white text-3xl mb-4 w-3/4 mx-auto md:mx-0 md:text-center md:w-full py-6'>Mon parcours</h3>
            <div className='md:items-center'>
                <div className='md:border-t-0 md:border-r-2 md:border-r-white lg:pr-16'>
                    <p className='w-3/4 md:w-full mx-auto md:mx-0 md:p-[1rem] text-white pt-4'>
                        Après avoir laissé de côté les lignes de code pendant plusieurs années, j'ai décidé de reprendre mes études. C'est dans cette optique que j'ai rejoint la Web@cadémie par EPITECH à Strasbourg.
                    </p>
                    <p className='w-3/4 md:w-full mx-auto md:mx-0 md:p-[1rem] text-white pt-4'>
                        J'ai donc commencé par travailler les bases de l'HTML et du CSS afin de prouver ma motivation à aller au bout de ce cursus. C'est ainsi que j'ai entamé ma formation en novembre 2022, avec pour objectif de devenir développeur Web.
                    </p>
                </div>
                <img src={LogoWac} className='w-3/4 mx-auto md:w-2/3 my-6' />
            </div>
            <div className='md:items-center mt-[1rem]'>
                <div className='border border-transparent pt-4 md:border-r-2 md:border-r-white lg:pr-16'>
                    <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white mb-4'>
                        J'y ai appris les langages les plus couramment utilisés dans le domaine du Web, à savoir le PHP et le JavaScript, mais ce n'est pas tout !
                    </p>
                    <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white mb-4'>
                        Rapidement, le code dit « Vanilla » a laissé place aux frameworks pour gagner en compétences, en vitesse de réalisation et en stabilité afin de maintenir les projets dans le futur. Parmi ces derniers, on peut citer Laravel ou Symfony (pour le côté PHP), ou bien React ou NodeJS (pour le côté JavaScript).
                    </p>
                    <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white mb-4'>
                        De plus, cette formation nous a permis de découvrir d'autres langages, frameworks, librairies et méthodologies de code.
                    </p>
                    <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white'>
                        Tous les projets que j'ai pu mener à bien me permettent aujourd'hui d'aborder des problématiques plus complexes et d'être polyvalent dans des domaines diverses tels que le développement d'applications mobiles ou encore d'algorithmes.
                    </p>
                </div>
                <img src={Corgi} className='w-3/4 mx-auto md:w-3/4 my-[1rem]' title="Oui c'est moi qui l'ai fait" alt='Coding doggy' />
            </div>
            <hr className='w-3/4 mx-auto my-3 md:hidden mt-6' />
            <div className='md:items-center mt-[1rem]'>
                <img src={LogoGrad} className='w-1/2 md:w-3/4 mx-auto my-3' />
                <div className=' border border-transparent pt-4 md:border-l-2 md:border-l-white'>
                    <p className='w-3/4 md:w-full md:p-[1rem] mx-auto md:mx-0 text-white mb-4'>
                        C'est dans le cadre de ma formation que j'ai réalisé un apprentissage durant 14 mois au sein de la société GRAD.
                    </p>
                    <p className='w-3/4 md:w-full md:p-[1rem] mx-auto md:mx-0 text-white mb-4'>
                        Au cours de cette période, j'ai découvert en quoi consistait la mise en production d'un site, les bonnes pratiques à adopter ou encore l'existence de divers outils afin d'améliorer les performances, le référencement ainsi que l'interface utilisateur des projets sur lesquels j'ai été amené à travailler.
                    </p>
                    <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white'>
                        Parallèlement, je me suis familiarisé avec Wordpress et Woocommerce afin de développer de nouvelles extensions, des widgets et autres shortcodes (morceaux de code réutilisables à l'infini à l'intérieur des pages), afin de proposer de nouvelles fonctionnalités aux visiteurs des différents sites de la marque.
                    </p>
                    <ul className='my-4 flex flex-col gap-3 task-list text-white w-3/4 md:w-full md:p-[1rem] mx-auto md:mx-0'>
                        On peut y retrouver par exemple :
                        <li>un comparateur des différentes essences</li>
                        <li>une refonte complète des aperçus pour les produits</li>
                        <li>la mise en ligne des contenus dans différentes langues</li>
                        <li>la personnalisation de l'interface en fonction de la localisation de l'utilisateur</li>
                        <li>la possibilité de filtrer des projets selon plusieurs critères</li>
                        <li>l'intégration d'une modélisation 3D des produits</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
