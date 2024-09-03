import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import '../Visitor.scss';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-neutral-950">
                {children}
        </div>
    );
}
