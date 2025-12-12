import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';

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
      
      <App toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
