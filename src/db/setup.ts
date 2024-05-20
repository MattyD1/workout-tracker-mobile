import * as S from '@effect/schema/Schema'
import {
  createEvolu,
  createIndexes,
  database,
  NonEmptyString1000,
} from '@evolu/react-native'

import { TodoTable } from '@/features/demo/models/todo'
import {
  NonEmptyString50,
  TodoCategoryTable,
} from '@/features/demo/models/todo-category'

const Database = database({
  todo: TodoTable,
  todoCategory: TodoCategoryTable,
})
export type Database = typeof Database.Type

const indexes = createIndexes((create) => [
  create('indexTodoCreatedAt').on('todo').column('createdAt'),
  create('indexTodoCategoryCreatedAt').on('todoCategory').column('createdAt'),
])

export default createEvolu(Database, {
  indexes,
  initialData: (evolu) => {
    const { id: categoryId } = evolu.create('todoCategory', {
      name: S.decodeSync(NonEmptyString50)('Not Urgent'),
    })
    evolu.create('todo', {
      title: S.decodeSync(NonEmptyString1000)('Try React Suspense'),
      categoryId,
    })
  },
})
