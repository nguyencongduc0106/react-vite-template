import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'

interface RouteContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
})

function RootComponent() {
  return <Outlet />
}
