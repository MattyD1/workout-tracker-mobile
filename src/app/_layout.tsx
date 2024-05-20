import 'fast-text-encoding'
import 'react-native-get-random-values'

import React from 'react'
import { EvoluProvider } from '@evolu/react-native'
import { Slot } from 'expo-router'

import evolu from '@/db/setup'

import '../../global.css'

export default RootLayoutNav

function RootLayoutNav() {
  return (
    <Providers>
      <Slot />
    </Providers>
  )
}

function Providers({ children }: { children: React.ReactNode }) {
  return <EvoluProvider value={evolu}>{children}</EvoluProvider>
}
