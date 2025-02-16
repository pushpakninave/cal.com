"use client"
import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { Account } from '../Account/Account'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'
import { HomeIcon, Users2, CalendarCheck, Settings } from 'lucide-react'

export const dashboardLinks = [
    {
        id: 0,
        name: "Event Types",
        href: "/dashboard",
        icon: HomeIcon,
    },
    {
        id: 1,
        name: "Meetings",
        href: "/dashboard/meetings",
        icon: Users2,
    },
    {
        id: 2,
        name: "Availablity",
        href: "/dashboard/availability",
        icon: CalendarCheck,
    },
    {
        id: 3,
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];
export default function DesktopNav() {
    const pathname = usePathname();

    return (
        <div>
            <div className='hidden md:flex flex-row gap-4'>
                {dashboardLinks.map((link) => (
                    <div key={link.id}>
                        <HoverCard openDelay={2} closeDelay={1}>
                            <HoverCardTrigger asChild>
                                <Button variant="link">
                                    <Link key={link.id} href={link.href} className={cn(pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground", "gap-4 rounded-lg px-3 py-2 transition-all hover:text-primary")}>
                                        <link.icon />
                                    </Link>
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                {link.name}
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                ))}
                <div>
                    <ThemeToggle />
                </div>
                <div>
                    <Account />
                </div>
            </div>
        </div>
    )
}
