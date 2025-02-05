import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import Logo from './Logo'
import { signIn } from '../utils/auth'
import { GithubAuthButton, GoogleAuthButton } from './SubmitButtons'

export default function AuthModal() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className='rounded-2xl'>Try out</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[360px]'>
                <DialogTitle className='none'></DialogTitle>
                <DialogHeader className='flex items-center'>
                    <Logo />
                </DialogHeader>
                <div className='flex flex-col mt-5 gap-2'>
                    <form action={async () => {
                        "use server"
                        await signIn("google");
                    }} className='w-full'>
                        <GoogleAuthButton />
                    </form>
                    <form action={async () => {
                        "use server"
                        await signIn("github");
                    }} className='w-full'>
                        <GithubAuthButton />
                    </form>

                </div>
            </DialogContent>
        </Dialog>
    )
}

