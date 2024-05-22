import * as S from '@effect/schema/Schema'
import { id, NonEmptyString1000, String, table } from '@evolu/react-native'

const ExerciseId = id('Exercise')
type ExerciseId = typeof ExerciseId.Type

export const NonEmptyString100 = String.pipe(
  S.minLength(1),
  S.maxLength(100),
  S.brand('NonEmptyString100')
)

export const ExerciseTable = table({
  id: ExerciseId,
  name: NonEmptyString100,
  description: NonEmptyString1000,
})
export type ExerciseTable = typeof ExerciseTable.Type
