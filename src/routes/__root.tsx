import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Toaster } from 'sonner'
import Header from '../components/Header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </>
  ),
})
