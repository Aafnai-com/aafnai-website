import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

function Root() {

  const [colorScheme, setColorScheme] = useState('light');

  const toggleColorScheme = () => {
    setColorScheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <MantineProvider
      theme={{ colorScheme }}
    >
      <HashRouter>
        <App toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />
      </HashRouter>

    </MantineProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
