/**
 * This file contains the root router of your tRPC-backend
 */
import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { listRouter } from './list';

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = trpc.router()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge('list.', listRouter);

export type AppRouter = typeof appRouter;