import React, { useCallback, useEffect } from 'react'
import { SplashScreen, Tabs } from 'expo-router'

export default function TabLayout() {
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    setTimeout(() => {
      hideSplash()
    }, 1000)
  }, [hideSplash])

  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  )
}
