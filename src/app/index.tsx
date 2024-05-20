import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Env } from '@/core/env'
import { cn } from '@/core/utils'
import Todos from '@/features/demo/components/todos'

export default function App() {
  return (
    <View
      className={cn(
        'flex flex-1 items-center justify-center',
        'bg-primary dark:bg-primary-dark'
      )}
    >
      <Text className="text-primary-foreground dark:text-primary-dark-foreground">
        Open up App.tsx to start working on your app! This is environment $
        {Env.APP_ENV}
      </Text>

      <Todos />

      <StatusBar style="auto" />
    </View>
  )
}
