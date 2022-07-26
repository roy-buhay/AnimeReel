import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'

import * as React from 'react'
import superjson from 'superjson';
import { createReactQueryHooks } from '@trpc/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppRouter } from '@anime-reel/api/src/routers/_app';

export const trpc = createReactQueryHooks<AppRouter>();
export const transformer = superjson;

export default function App() {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    trpc.createClient({
      url: `http://localhost:19000`,
      async headers() {
        return {};
      },
      // transformer,
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <NativeNavigation />
        </Provider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
