import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import '@mantine/core/styles.css'
import './index.css'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider forceColorScheme="light">
      <App />
    </MantineProvider>
  </StrictMode>,
)
