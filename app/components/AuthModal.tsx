import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import Logo from './Logo'
import { GithubAuthButton, GoogleAuthButton } from './SubmitButtons'
import { SignIn } from '../utils/actions'

export default function AuthModal() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className='rounded-2xl mx-4'>Try out</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[360px]'>
                <DialogTitle className='none'></DialogTitle>
                <DialogHeader className='flex items-center'>
                    <Logo />
                </DialogHeader>
                <div className='flex flex-col mt-5 gap-2'>
                    <form action={() => SignIn("google")} className='w-full'>
                        <GoogleAuthButton />
                    </form>
                    <form action={() => SignIn("github")} className='w-full'>
                        <GithubAuthButton />
                    </form>

                </div>
            </DialogContent>
        </Dialog>
    )
}

