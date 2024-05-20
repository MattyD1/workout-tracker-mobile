import 'fast-text-encoding'
import 'react-native-get-random-values'

import React from 'react'
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation'
import { EvoluProvider } from '@evolu/react-native'
import { ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router'

import evolu from '@/db/setup'

import '../../global.css'

import { useThemeConfig } from '@/core/use-theme-config'

export { ErrorBoundary } from 'expo-router'

export const unstable_settings = {
  initialRouteName: '(home)',
}

SplashScreen.preventAutoHideAsync()

export default function () {
  const navigationRef = useNavigationContainerRef()
  useReactNavigationDevTools(navigationRef)
  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  )
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig()
  return (
    <ThemeProvider value={theme}>
      <EvoluProvider value={evolu}>{children}</EvoluProvider>
    </ThemeProvider>
  )
}
