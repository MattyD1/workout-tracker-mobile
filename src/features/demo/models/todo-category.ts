import * as S from '@effect/schema/Schema'
import { id, String, table } from '@evolu/react-native'

export const TodoCategoryId = id('TodoCategory')
export type TodoCategoryId = typeof TodoCategoryId.Type

export const NonEmptyString50 = String.pipe(
  S.minLength(1),
  S.maxLength(50),
  S.brand('NonEmptyString50')
)

const DemoJson = S.Struct({ foo: S.String, bar: S.Boolean })
type DemoJson = typeof DemoJson.Type

export const TodoCategoryTable = table({
  id: TodoCategoryId,
  name: NonEmptyString50,
  json: S.NullOr(DemoJson),
})

export type TodoCategoryTable = typeof TodoCategoryTable.Type
