import React from 'react'
import LogoWac from '@/assets/wac.svg'
import Corgi from '@/assets/corgi.svg'
import LogoGrad from '@/assets/grad.svg'

export const Formations = () => {
    return (
        <section className='min-h-screen bg-[#252525] py-6 lg:px-[10%] mx-auto' id="formation">
            <h3 className='text-white text-3xl mb-4 w-3/4 mx-auto md:mx-0 md:text-center md:w-full'>Mon parcours</h3>
            <div className='md:items-center'>
                <p className='w-3/4 md:w-full mx-auto md:mx-0 md:p-[1rem] text-white md:border-t-0 pt-4 md:border-r-2 md:border-r-white'>
                    Après avoir laissé les lignes de codes de côté pendant plusieurs années, j'ai décidé de reprendre mes études. C'est dans cette démarche que j'ai rejoint la Web@académie par EPITECH à Strasbourg.</p>
                <p className='w-3/4 md:w-full mx-auto md:mx-0 md:p-[1rem] text-white md:border-t-0 pt-4 md:border-r-2 md:border-r-white'>
                    J'ai donc commencé par travailler les bases de l'HTML et du CSS afin de prouver ma motivation à aller au bout de ce cursus. C'est ainsi que j'ai démarré ma formation en novembre 2022 avec comme objectif de devenir développeur Web.
                </p>
                <img src={LogoWac} className='w-3/4 mx-auto md:w-2/3 my-6' />
            </div>
            <div className='md:items-center mt-[1rem]'>
                <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4 md:border-r-2 md:border-r-white'>
                    J'y ai appris les langages les plus couramment utilisés dans le domaine du Web à savoir le PHP et Javascript, mais ce n'est pas tout!</p>
                <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4 md:border-r-2 md:border-r-white'>
                    Rapidement le code dit "Vanilla" a laissé place aux frameworks afin de gagner en compétences, en vitesse de réalisation et en stabilité pour maintenir les projets à l'avenir. Parmis ces derniers on peut citer Laravel ou Symfony, pour le côté PHP, ou bien React ou NodeJs, pour le côté Javascript.
                </p>
                <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4 md:border-r-2 md:border-r-white'>
                    De plus, cette formation nous a permis de voir d'autres langages, frameworks, librairies et façon de coder.
                </p>
                <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4 md:border-r-2 md:border-r-white'>
                    Tous les projets que j'ai pu réaliser me permettent aujourd'hui d'aborder des problèmes plus complexes et d'être polyvalent dans des domaines qui ne se limitent pas qu'aux sites Web que l'ont connait depuis de nombreuses années. En effet, j'ai pu réaliser des applications mobiles, ou encore à réaliser des algorithmes qui permettent de réaliser de nombreuses actions en un temps limité.
                </p>
                <img src={Corgi} className='w-3/4 mx-auto md:w-3/4 my-[1rem]' title="Oui c'est moi qui l'ai fait" alt='Coding doggy' />
            </div>
            <hr className='w-3/4 mx-auto my-3 md:hidden mt-6' />
            <div className='md:items-center mt-[1rem]'>
                <img src={LogoGrad} className='w-1/2 md:w-3/4 mx-auto my-3' />
                <p className='w-3/4 md:w-full md:p-[1rem] mx-auto md:mx-0 text-white border border-transparent pt-4 md:border-l-2 md:border-l-white'>
                    C'est dans le cadre de ma formation que j'ai réalisé 14 mois en apprentissage au sein de la société GRAD (une entreprise du groupe Burger&Cie).&nbsp;Au cours de cette période, j'ai découvert en quoi consistait la mise en production d'un site, les bonnes pratiques à adopter ou encore l'existence de divers outils afin d'améliorer les performances, le référencement ainsi que l'interface utilisateur des projets sur lesquels j'ai été amené à travailler.
                </p>
                <p className='w-3/4 md:w-full mx-auto md:p-[1rem] md:mx-0 text-white border border-transparent pt-4 md:border-r-2 md:border-r-white'>
                    C'est ainsi que je me suis familiarisé avec Wordpress et Woocommerce pour développer de nouvelles extensions, des widgets et shortcodes (morceaux de code réutilisables à l'infini dans les pages), afin de proposer de nouvelles fonctionnalités au visiteurs des différents sites de la marque.
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
        </section>
    )
}
