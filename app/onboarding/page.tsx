"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useActionState } from 'react'
import Logo from '../components/Logo'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { OnboardingAction } from '../utils/actions'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { OnboardingSchema } from '../utils/zodSchemas'
import { SubmitFormButton } from '../components/SubmitButtons'

export default function Onboarding() {

    /* 
        server side is done in actions.ts
        client side form validation. 
    */
    const [lastResult, action] = useActionState(OnboardingAction, undefined);

    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: OnboardingSchema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
            <Card>
                <CardHeader>
                    <CardTitle className='flex flex-row items-center gap-2'>
                        Welcome to <Logo />
                    </CardTitle>
                    <CardDescription>
                        Welcome to the onboarding page
                    </CardDescription>
                </CardHeader>
                <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
                    <CardContent className='grid gap-y-5'>
                        <div className='grid gap-y-2'>
                            <Label>Full Name</Label>
                            <Input placeholder='Jhon Doe' name={fields.name.name} defaultValue={fields.name.initialValue} key={fields.name.key} />
                        </div>
                        <p className='text-red-500 text-sm'>{fields.name.errors}</p>
                        <div className='grid gap-y-2'>
                            <Label>Username</Label>
                            <div className='flex rounded-md'>
                                <span className='inline-flex items-center px-3 bg-muted border-r-0 text-sm text-muted-foreground rounded-l-md'>KalNirnaay.com/</span>
                                <Input name={fields.username.name} defaultValue={fields.username.initialValue} key={fields.username.key} placeholder='username' className='rounded-l-none' />
                            </div>
                            <p className='text-red-500 text-sm'>{fields.username.errors}</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <SubmitFormButton text={'Continue'} variant='default' className='w-full' />
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
