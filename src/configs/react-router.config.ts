// Import the generated route tree
import { routeTree } from '@src/routeTree.gen'
import { createRouter } from '@tanstack/react-router'

import { queryClient } from './react-query.config'

// Create a new router instance
export const router = createRouter({ routeTree, context: { queryClient } })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
