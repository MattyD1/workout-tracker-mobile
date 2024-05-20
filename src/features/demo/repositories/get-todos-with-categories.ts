import { cast, jsonArrayFrom, type NotNull } from '@evolu/react-native'

import evolu from '@/db/setup'

export const getTodosWithCategories = evolu.createQuery(
  (db) =>
    db
      .selectFrom('todo')
      .select(['id', 'title', 'isComplete', 'categoryId'])
      .where('isDeleted', 'is not', cast(true))
      .where('title', 'is not', null)
      .$narrowType<{ title: NotNull }>()
      .orderBy('createdAt')
      .select((eb) => [
        jsonArrayFrom(
          eb
            .selectFrom('todoCategory')
            .select(['todoCategory.id', 'todoCategory.name'])
            .where('isDeleted', 'is not', cast(true))
            .orderBy('createdAt')
        ).as('categories'),
      ]),
  {
    logExplainQueryPlan: true,
    logQueryExecutionTime: true,
  }
)
