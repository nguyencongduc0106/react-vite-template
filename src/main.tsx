import { StrictMode } from 'react'
import { keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './globals.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
      placeholderData: keepPreviousData,
    },
  },
})

// Create a new router instance
const router = createRouter({ routeTree, context: { queryClient } })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
