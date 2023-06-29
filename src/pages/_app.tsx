import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/main.scss';
import { appWithTranslation } from 'next-i18next';
import { QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { getQueryClient } from '@/helpers/reactQuery';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(getQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
