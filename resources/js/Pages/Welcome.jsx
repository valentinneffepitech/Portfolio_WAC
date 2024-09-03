import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout'
import { useState } from 'react';
import { TechnoDisplayer } from '@/Components/customs/TechnoDisplayer';
import { TechnoFilter } from '@/Components/customs/TechnoFilter';
import { Accueil } from '@/Components/customs/sections/Accueil';
import { Menu } from '@/Components/customs/sections/Menu';
import { MenuIcon, X } from 'lucide-react';
import { Contact } from '@/Components/customs/sections/Contact';
import { Footer } from '@/Components/customs/sections/Footer';
import { Formations } from '@/Components/customs/sections/Formations';
import { Presentation } from '@/Components/customs/sections/Presentation';
import { Techno } from '@/Components/customs/sections/Techno';

export default function Welcome({ technologies, categories }) {

    const [filter, setFilter] = useState([]);

    const [openMenu, setOpenMenu] = useState(false);

    const closeMenu = () => setOpenMenu(false);

    const iconSize = 30

    const manageFilter = (value) => {
        console.log(value)
        value = parseInt(value);
        if (filter.includes(value)) {
            setFilter(prev => prev.filter(element => element != value));
        } else {
            setFilter(prev => [...prev, value]);
        }
    }

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
            <section id="projets" className='min-h-screen bg-white'>
                <Techno />
                <TechnoFilter categories={categories} manageFilter={manageFilter} />
                <TechnoDisplayer technologies={technologies} filter={filter} />
            </section>
            <Contact />
            <Footer />
        </GuestLayout>
    );
}
