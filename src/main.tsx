import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppProvider from './providers'

// Import the generated route tree
import './globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
)
