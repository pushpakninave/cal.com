"use client"

import Link from "next/link";
import AuthModal from "../AuthModal";
import Logo from "../Logo";
import { auth } from "@/app/utils/auth";
import CalLinks from "./CalLinks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log("current : ", currentScrollY, "and last : ", lastScrollY);
            console.log("visibility : ", isVisible);

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);  

    return (
        <div className={`fixed w-[99vw] md:mx-auto left-1/2 top-0 transform -translate-x-1/2 flex py-3 items-center justify-between md:max-w-5xl pl-4 sm:pl-6 lg:pl-6 bg-muted/40 border-2 rounded-2xl my-1 mr-2 md:m-2 transition-transform duration-300 gap-10 ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div>
                {session?.user ? <CalLinks /> : <AuthModal />}
            </div>
        </div>
    )
}
