import React, { useState } from 'react'
import * as S from '@effect/schema/Schema'
import { NonEmptyString1000, useEvolu, useQuery } from '@evolu/react-native'
import { Either, Function } from 'effect'
import { Text, TextInput, View } from 'react-native'
import { type Database } from 'src/db/setup'

import { getTodosWithCategories } from '../repositories/get-todos-with-categories'

const Todos = () => {
  const { rows } = useQuery(getTodosWithCategories)
  const { create } = useEvolu<Database>()

  const [text, setText] = useState('')
  const newTodoTitle = S.decodeUnknownEither(NonEmptyString1000)(text)
  const handleTextInputEndEditing = () => {
    Either.match(newTodoTitle, {
      onLeft: Function.constVoid,
      onRight: (title) => {
        create('todo', { title, isComplete: false })
        setText('')
      },
    })
  }

  return (
    <>
      <Text>Todos</Text>
      <TextInput
        autoComplete="off"
        autoCorrect={false}
        value={text}
        onChangeText={setText}
        placeholder="What needs to be done?"
        onEndEditing={handleTextInputEndEditing}
      />
      <View>
        {rows.map((row) => (
          <Text key={row.id}>{row.title}</Text>
        ))}
      </View>
    </>
  )
}

export default Todos
