import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        colors: {
          blue: [
            '#e0f0e0',
            '#bfdfbf',
            '#a3cea3',
            '#80bd80',
            '#66ac66',
            '#4a9b4a',
            '#3d8a3d',
            '#307930',
            '#216121',
            '#0a4a0a',
          ],
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
