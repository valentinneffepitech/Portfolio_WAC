import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout'
import { useState } from 'react';
import { TechnoDisplayer } from '@/Components/customs/TechnoDisplayer';
import { Github } from '@/Components/customs/svg/Github';
import { Accueil } from '@/Components/customs/sections/Accueil';
import { Menu } from '@/Components/customs/sections/Menu';
import { MenuIcon, X } from 'lucide-react';
import { Contact } from '@/Components/customs/sections/Contact';
import { Footer } from '@/Components/customs/sections/Footer';
import { Formations } from '@/Components/customs/sections/Formations';
import { Presentation } from '@/Components/customs/sections/Presentation';
import { Techno } from '@/Components/customs/sections/Techno';
import { Temoignages } from '@/Components/customs/sections/Temoignages';

export default function Welcome({ feedbacks, projects }) {

    const [openMenu, setOpenMenu] = useState(false);

    const closeMenu = () => setOpenMenu(false);

    const iconSize = 30

    return (
        <GuestLayout>
            <Head title="Valentin Neff" />
            {
                openMenu ?
                    <X size={iconSize} id="menuTrigger" onClick={() => setOpenMenu(prev => !prev)} className='fixed top-6 cursor-pointer right-6 z-20' />
                    :
                    <MenuIcon size={iconSize} id="menuTrigger" onClick={() => setOpenMenu(prev => !prev)} className='fixed top-6 cursor-pointer right-6 z-20' />
            }
            {
                openMenu &&
                <Menu close={closeMenu} />
            }
            <Accueil />
            <Presentation />
            <Formations />
            <section id="projets" className='min-h-screen bg-[#252525] block pt-6'>
                <TechnoDisplayer projects={projects} />
                <a href='https://github.com/valentinneffepitech/Portfolio' className='flex text-white items-center mx-auto border-2 rounded w-fit border-[#f6f6f6] transition-all duration-200 hover:text-[#1d1d1d] hover:bg-[#f6f6f6] text-center py-4 px-6 mb-[2rem]' target='_blank'>
                    Retrouvez tous mes projets sur Github <Github stroke={'#1d1d1d'} className='w-8 h-fit ml-3' id="github_link" />
                </a>
            </section>
            <Temoignages feedbacks={feedbacks} />
            <Contact />
            <Footer />
        </GuestLayout>
    );
}
