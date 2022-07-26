

/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import * as trpc from '@trpc/server';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const listRouter =  trpc.router()
  .query('hello', {
      input: z
        .object({
          text: z.string().nullish(),
        })
        .nullish(),
      resolve({ input }) {
        return {
          greeting: `hello ${input?.text ?? 'world'}`,
        };
      },
 });