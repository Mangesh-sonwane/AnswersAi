import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Analytics } from '@vercel/analytics/react';
import { PrivyProvider } from '@privy-io/react-auth';

const appId = import.meta.env.VITE_PRIVY_APP_ID;

if (!appId) {
  throw new Error(
    'REACT_APP_PRIVY_APP_ID is not defined in the environment variables'
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivyProvider appId={appId}>
      <App />
      <Analytics />
    </PrivyProvider>
  </StrictMode>
);
