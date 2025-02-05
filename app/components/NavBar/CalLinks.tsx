"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { CalendarCheck, HomeIcon, Menu, Settings, Users2 } from "lucide-react";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button';

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Sheet, SheetTrigger } from '@/components/ui/sheet';

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

export default function CalLinks() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex gap-4'>
            <div className='lg:hidden'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <Menu className='size-5 cursor-pointer' />
                        </MenubarTrigger>
                        <MenubarContent className='sm:mx-6'>
                            {
                                dashboardLinks.map((link) => (
                                    <div key={link.id}>
                                        <MenubarItem className={cn(pathname === link.href ? "bg-accent" : "")}>
                                            <Link key={link.id} href={link.href} className={cn(pathname === link.href ? "text-primary" : "text-muted-foreground", "flex flex-row gap-4 w-full h-full transition-all")}>
                                                <link.icon className='size-5' />
                                                <p className=''>{link.name}</p>
                                            </Link>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                    </div>
                                ))
                            }
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <div className='hidden lg:flex gap-4'>
                {dashboardLinks.map((link) => (
                    <div key={link.id}>
                        <HoverCard openDelay={2} closeDelay={1}>
                            <HoverCardTrigger asChild>
                                <Button variant="link">
                                    <Link key={link.id} href={link.href} className={cn(pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground", "gap-4 rounded-lg px-3 py-2 transition-all hover:text-primary")}>
                                        <link.icon className='size-5' />
                                    </Link>
                                </Button>
                            </HoverCardTrigger>
                            <HoverCardContent>
                                {link.name}
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                ))}
            </div>
        </div>
    )
}
