import React from 'react'
import { useQuery } from '@evolu/react-native'
import { Text, View } from 'react-native'

import { getTodosWithCategories } from '../repositories/get-todos-with-categories'

const Todos = () => {
  const { rows } = useQuery(getTodosWithCategories)

  return (
    <>
      <Text>Todos</Text>
      <View>
        {rows.map((row) => (
          <Text>{row.title}</Text>
        ))}
      </View>
    </>
  )
}

export default Todos
