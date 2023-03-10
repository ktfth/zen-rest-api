// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1StocksDataValidator,
  v1StocksPatchValidator,
  v1StocksQueryValidator,
  v1StocksResolver,
  v1StocksExternalResolver,
  v1StocksDataResolver,
  v1StocksPatchResolver,
  v1StocksQueryResolver
} from './stocks.schema'

import type { Application } from '../../../declarations'
import { V1StocksService, getOptions } from './stocks.class'
import { timestamp } from '../../../hooks/timestamp'
import { stocks } from '../../../hooks/stocks'

export * from './stocks.class'
export * from './stocks.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const v1Stocks = (app: Application) => {
  // Register our service on the Feathers application
  app.use('v1/stocks', new V1StocksService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('v1/stocks').hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1StocksExternalResolver),
        schemaHooks.resolveResult(v1StocksResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1StocksQueryValidator),
        schemaHooks.resolveQuery(v1StocksQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        timestamp,
        stocks,
        schemaHooks.validateData(v1StocksDataValidator),
        schemaHooks.resolveData(v1StocksDataResolver)
      ],
      patch: [
        timestamp,
        stocks,
        schemaHooks.validateData(v1StocksPatchValidator),
        schemaHooks.resolveData(v1StocksPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/stocks': V1StocksService
  }
}
