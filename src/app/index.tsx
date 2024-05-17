import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { cn } from 'src/core/utils'
import Todos from 'src/features/demo/components/todos'

import { Env } from '../core/env'

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
