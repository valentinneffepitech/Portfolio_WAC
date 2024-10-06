import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout'
import { useState } from 'react';
import { Accueil } from '@/Components/customs/sections/Accueil';
import { Menu } from '@/Components/customs/sections/Menu';
import { MenuIcon, X } from 'lucide-react';
import { Contact } from '@/Components/customs/sections/Contact';
import { Footer } from '@/Components/customs/sections/Footer';
import { Formations } from '@/Components/customs/sections/Formations';
import { Presentation } from '@/Components/customs/sections/Presentation';
import { Techno } from '@/Components/customs/sections/Techno';
import { Temoignages } from '@/Components/customs/sections/Temoignages';

export default function Welcome({ feedbacks, projects, categories }) {

    const [openMenu, setOpenMenu] = useState(false);

    const [filter, setFilter] = useState([]);

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
            <Techno categories={categories} projects={projects} />
            <Temoignages feedbacks={feedbacks} />
            <Contact />
            <Footer />
        </GuestLayout>
    );
}
