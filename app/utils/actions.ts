"use server"

import { requireUser } from "./hooks"
import { prisma } from "./prisma"
import { parseWithZod } from '@conform-to/zod';
import { OnboardingSchema, OnboardingSchemaValidation } from "./zodSchemas";
import { auth, signIn } from "./auth";
import { redirect } from "next/navigation";

// server side validation.
export async function OnboardingAction(previousState: any, formData: FormData) {
    const session = await requireUser();
    // validating the form data against the zod schema
    const submission = await parseWithZod(
        formData,
        {
            schema: OnboardingSchemaValidation({
                isUsernameUnique: async () => {
                    const existingUser = await prisma.user.findUnique({
                        where: {
                            username: formData.get("username") as string,
                        },
                    });
                    return !existingUser;
                },
            }),
            async: true,
        });

    if (submission.status !== 'success') {
        return submission.reply();
    }

    const data = await prisma.user.update({
        where: {
            id: session?.user?.id,
        },
        data: {
            username: submission.value.username,
            name: submission.value.name,
        }
    });

    return redirect('/dashboard');
}

export async function SignIn(provider: string) {
    console.log(provider);
    await signIn(provider);
}

export async function GetSession() {
    return await auth();
}

export async function getData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            username: true,
        },
    })
    if (!data?.username) {
        return redirect("/onboarding");
    }
    
    return data;
}
