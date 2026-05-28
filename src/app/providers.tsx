'use client'

import React from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { UIProvider } from '@/context/UIContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <UIProvider>{children}</UIProvider>
    </ThemeProvider>
  )
}
