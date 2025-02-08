import Link from 'next/link';
import { ReactNode } from 'react'
import Logo from '../components/Logo';
import { DasboardLinks } from '../components/dashboard/DashboardLinks';

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6'>{children}</main>
        </>
    )
}
