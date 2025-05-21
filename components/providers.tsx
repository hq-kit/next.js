'use client'

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { RouterProvider } from 'react-aria-components'

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </RouterProvider>
  )
}

export { Providers, useTheme }
