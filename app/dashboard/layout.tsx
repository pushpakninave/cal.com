import Link from 'next/link';
import { ReactNode } from 'react'
import Logo from '../components/Logo';
import { DasboardLinks } from '../components/dashboard/DashboardLinks';
import { requireUser } from '../utils/hooks';
import { getData } from '../utils/actions';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const session = await requireUser();
    const data = await getData(session.user?.id as string);
    return (
        <>
            <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6'>{children}</main>
        </>
    )
}
