import * as S from '@effect/schema/Schema'
import {
  id,
  NonEmptyString1000,
  SqliteBoolean,
  table,
} from '@evolu/react-native'

import { TodoCategoryId } from './todo-category'

const TodoId = id('Todo')
type TodoId = typeof TodoId.Type

export const TodoTable = table({
  id: TodoId,
  title: NonEmptyString1000,
  isComplete: S.NullOr(SqliteBoolean),
  categoryId: S.NullOr(TodoCategoryId),
})

export type TodoTable = typeof TodoTable.Type
