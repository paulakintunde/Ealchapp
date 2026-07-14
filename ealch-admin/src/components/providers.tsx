'use client';
// Client-side providers for the admin shell: TanStack Query + toasts.
// Mounted once by src/app/admin/layout.tsx.
import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from './toast';

export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 15_000 } },
      }),
  );
  return (
    <QueryClientProvider client={client}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
}

// Contract alias — screens may refer to this as QueryProvider.
export { Providers as QueryProvider };
export default Providers;
