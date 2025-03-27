import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
    },
    client: {
        NEXT_PUBLIC_TARGET_DATE: z
            .string()
            .datetime()
            .transform(value => new Date(value))
            .pipe(z.date()),
        NEXT_PUBLIC_COUNTDOWN_EXPIRE_OFFSET: z.coerce.number().default(10),
        NEXT_PUBLIC_DEBUG_COUNTDOWN: z
            .union([z.string(), z.boolean()])
            .refine(value => typeof value === 'boolean' || ['true', 'false', '0', '1'].includes(value))
            .transform(value => {
                switch (value) {
                    case true:
                    case 'true':
                    case '1':
                        return true;
                    default:
                        return false;
                }
            })
            .pipe(z.boolean()),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_TARGET_DATE: process.env.NEXT_PUBLIC_TARGET_DATE,
        NEXT_PUBLIC_COUNTDOWN_EXPIRE_OFFSET: process.env.NEXT_PUBLIC_COUNTDOWN_EXPIRE_OFFSET,
        NEXT_PUBLIC_DEBUG_COUNTDOWN: process.env.NEXT_PUBLIC_DEBUG_COUNTDOWN,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    emptyStringAsUndefined: true,
});
