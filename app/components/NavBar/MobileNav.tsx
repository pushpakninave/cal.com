"use client"

import React from 'react'
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
import { ThemeToggle } from '../ThemeToggle';
import { CalendarCheck, HomeIcon, Menu, Settings, Users2 } from "lucide-react";
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Account } from '../Account/Account';

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

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <div>
            <div className='md:hidden flex flex-row'>
                <div>
                    <ThemeToggle />
                </div>
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
                                                <link.icon />
                                                <p className=''>{link.name}</p>
                                            </Link>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                    </div>
                                ))
                            }
                            <MenubarItem className='flex flex-row w-full h-full'>
                                <Account />
                            </MenubarItem>
                            <MenubarSeparator />
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </div>
    )
}
