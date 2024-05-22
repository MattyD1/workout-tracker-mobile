import * as S from '@effect/schema/Schema'
import {
  createEvolu,
  createIndexes,
  database,
  NonEmptyString1000,
} from '@evolu/react-native'

import { TodoTable } from '@/features/demo/models/todo'
import { TodoCategoryTable } from '@/features/demo/models/todo-category'
import {
  ExerciseTable,
  NonEmptyString100,
} from '@/features/exercises/models/exercise'

import { exercises } from './seed/exercises'

const Database = database({
  todo: TodoTable,
  todoCategory: TodoCategoryTable,
  exercise: ExerciseTable,
})
export type Database = typeof Database.Type

const indexes = createIndexes((create) => [
  create('indexTodoCreatedAt').on('todo').column('createdAt'),
  create('indexTodoCategoryCreatedAt').on('todoCategory').column('createdAt'),
  create('indexExerciseCreatedAt').on('exercise').column('createdAt'),
])

export default createEvolu(Database, {
  indexes,
  initialData: (evolu) => {
    exercises.map((exercise) => {
      evolu.create('exercise', {
        name: S.decodeSync(NonEmptyString100)(exercise.name),
        description: S.decodeSync(NonEmptyString1000)(exercise.description),
      })
    })
  },
})
