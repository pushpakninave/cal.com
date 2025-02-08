"use server"

import { requireUser } from "./hooks"
import { prisma } from "./prisma"
import { parseWithZod } from '@conform-to/zod';
import { OnboardingSchema } from "./zodSchemas";
import { auth, signIn } from "./auth";

// server side validation.
export async function OnboardingAction(previousState: any, formData: FormData) {
    const session = await requireUser();
    // validating the form data against the zod schema
    const submission = parseWithZod(formData, { schema: OnboardingSchema });

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
}
