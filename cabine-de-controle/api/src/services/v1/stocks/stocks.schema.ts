// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../../declarations'
import { dataValidator, queryValidator } from '../../../validators'

// Main data model schema
export const v1StocksSchema = Type.Object(
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
    symbol: Type.Optional(Type.String()),
    timestamp: Type.Optional(Type.Number())
  },
  { $id: 'V1Stocks', additionalProperties: false }
)
export type V1Stocks = Static<typeof v1StocksSchema>
export const v1StocksResolver = resolve<V1Stocks, HookContext>({})

export const v1StocksExternalResolver = resolve<V1Stocks, HookContext>({})

// Schema for creating new entries
export const v1StocksDataSchema = Type.Pick(v1StocksSchema, ['stocks', 'timestamp'], {
  $id: 'V1StocksData'
})
export type V1StocksData = Static<typeof v1StocksDataSchema>
export const v1StocksDataValidator = getDataValidator(v1StocksDataSchema, dataValidator)
export const v1StocksDataResolver = resolve<V1Stocks, HookContext>({})

// Schema for updating existing entries
export const v1StocksPatchSchema = Type.Partial(v1StocksDataSchema, {
  $id: 'V1StocksPatch'
})
export type V1StocksPatch = Static<typeof v1StocksPatchSchema>
export const v1StocksPatchValidator = getDataValidator(v1StocksPatchSchema, dataValidator)
export const v1StocksPatchResolver = resolve<V1Stocks, HookContext>({})

// Schema for allowed query properties
export const v1StocksQueryProperties = Type.Pick(v1StocksSchema, ['id', 'symbol', 'stocks', 'timestamp'])
export const v1StocksQuerySchema = Type.Intersect(
  [
    querySyntax(v1StocksQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type V1StocksQuery = Static<typeof v1StocksQuerySchema>
export const v1StocksQueryValidator = getValidator(v1StocksQuerySchema, queryValidator)
export const v1StocksQueryResolver = resolve<V1StocksQuery, HookContext>({})
