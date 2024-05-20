import React from 'react'
import { Text, View } from 'react-native'

import { cn } from '@/core/utils'

export default function History() {
  return (
    <View
      className={cn(
        'flex flex-1 items-center justify-center',
        'bg-primary dark:bg-primary-dark'
      )}
    >
      <Text className="text-primary-foreground dark:text-primary-dark-foreground">
        History
      </Text>
    </View>
  )
}
