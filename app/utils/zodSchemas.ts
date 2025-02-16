import { conformZodMessage } from '@conform-to/zod';
import { z } from 'zod';

export const OnboardingSchema = z.object({
    name: z.string().min(3).max(255),
    username: z.string().min(3).max(255).regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscores' }),
})

export function OnboardingSchemaValidation(options?: { isUsernameUnique: () => Promise<boolean> }) {
    return z.object({
        username: z.string().min(3).max(255).regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain letters, numbers and underscores' })
            .pipe(
                z.string().superRefine((_, ctx) => {
                    if (typeof options?.isUsernameUnique !== 'function') {
                        ctx.addIssue({
                            code: 'custom',
                            message: conformZodMessage.VALIDATION_UNDEFINED,
                            fatal: true,
                        });
                        return;
                    }
                    return options.isUsernameUnique().then((isUnique) => {
                        if (!isUnique) {
                            ctx.addIssue({
                                code: 'custom',
                                message: 'Username already taken',  // this message is not user facing  
                            });
                        }
                    });
                })
            ),
        name: z.string().min(3).max(255),
    })
}