import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function OnboardingrouteTwo() {
    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle>You are almost Done!</CardTitle>
                    <CardDescription>We need to connect your calendar to your account.</CardDescription>
                    <Image src={''} alt={''} />
                </CardHeader>
            </Card>
        </div>
    )
}
