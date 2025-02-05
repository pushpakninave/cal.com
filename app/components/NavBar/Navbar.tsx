import Link from "next/link";
import AuthModal from "../AuthModal";
import Logo from "../Logo";
import { auth } from "@/app/utils/auth";
import CalLinks from "./CalLinks";

export default async function Navbar() {
    const session = await auth();

    return (
        <div className="flex py-3 items-center justify-between max-w-5xl mx-auto px-4 sm:px-6 lg:px-6 bg-muted/40 border-2 rounded-2xl m-2">
            <div>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            {session?.user ? <CalLinks /> : <AuthModal />}
        </div>
    )
}
