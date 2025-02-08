import { z } from 'zod';

export const OnboardingSchema = z.object({
    name: z.string().min(3).max(255),
    username: z.string().min(3).max(255).regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscores' }),
})

export function OnboardingSchemaValidation(options?: { isUsernameUnique: () => Promise<boolean> }) {
    return z.object({
        username: z.string().min(3).max(255).regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscores' }),
    })
        .pipe(
            z.string().superRefine((_, ctx) => {
                if (typeof options?.isUsernameUnique !== 'function') {
                    return ctx.addIssue({
                        code: 'custom',
                        message: 'isUsernameUnique function is required',
                        fatal: true,
                    })
                }
            })
        )
}