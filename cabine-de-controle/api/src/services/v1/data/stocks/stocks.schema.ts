// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../../declarations'
import { dataValidator, queryValidator } from '../../../../validators'

// Main data model schema
export const v1DataStocksSchema = Type.Object(
  {
    id: Type.Number(),
    stocks: Type.Optional(Type.Object({
      meta: Type.Object({
        symbol: Type.String(),
        interval: Type.String(),
        currency_base: Type.String(),
        currency_quote: Type.String(),
        type: Type.String(),
      }),
      values: Type.Array(Type.Object({
        datetime: Type.String(),
        open: Type.String(),
        high: Type.String(),
        low: Type.String(),
        close: Type.String(),
        volume: Type.Optional(Type.String()),
      })),
      status: Type.String(),
    })),
  },
  { $id: 'V1DataStocks', additionalProperties: false }
)
export type V1DataStocks = Static<typeof v1DataStocksSchema>
export const v1DataStocksResolver = resolve<V1DataStocks, HookContext>({})

export const v1DataStocksExternalResolver = resolve<V1DataStocks, HookContext>({})

// Schema for creating new entries
export const v1DataStocksDataSchema = Type.Pick(v1DataStocksSchema, ['stocks'], {
  $id: 'V1DataStocksData'
})
export type V1DataStocksData = Static<typeof v1DataStocksDataSchema>
export const v1DataStocksDataValidator = getDataValidator(v1DataStocksDataSchema, dataValidator)
export const v1DataStocksDataResolver = resolve<V1DataStocks, HookContext>({})

// Schema for updating existing entries
export const v1DataStocksPatchSchema = Type.Partial(v1DataStocksDataSchema, {
  $id: 'V1DataStocksPatch'
})
export type V1DataStocksPatch = Static<typeof v1DataStocksPatchSchema>
export const v1DataStocksPatchValidator = getDataValidator(v1DataStocksPatchSchema, dataValidator)
export const v1DataStocksPatchResolver = resolve<V1DataStocks, HookContext>({})

// Schema for allowed query properties
export const v1DataStocksQueryProperties = Type.Pick(v1DataStocksSchema, ['id', 'stocks'])
export const v1DataStocksQuerySchema = Type.Intersect(
  [
    querySyntax(v1DataStocksQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type V1DataStocksQuery = Static<typeof v1DataStocksQuerySchema>
export const v1DataStocksQueryValidator = getValidator(v1DataStocksQuerySchema, queryValidator)
export const v1DataStocksQueryResolver = resolve<V1DataStocksQuery, HookContext>({})
