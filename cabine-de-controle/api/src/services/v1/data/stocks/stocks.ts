// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  v1DataStocksDataValidator,
  v1DataStocksPatchValidator,
  v1DataStocksQueryValidator,
  v1DataStocksResolver,
  v1DataStocksExternalResolver,
  v1DataStocksDataResolver,
  v1DataStocksPatchResolver,
  v1DataStocksQueryResolver
} from './stocks.schema'

import type { Application } from '../../../../declarations'
import { V1DataStocksService, getOptions } from './stocks.class'

export * from './stocks.class'
export * from './stocks.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const v1DataStocks = (app: Application) => {
  // Register our service on the Feathers application
  app.use('v1/data/stocks', new V1DataStocksService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('v1/data/stocks').hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(v1DataStocksExternalResolver),
        schemaHooks.resolveResult(v1DataStocksResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(v1DataStocksQueryValidator),
        schemaHooks.resolveQuery(v1DataStocksQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(v1DataStocksDataValidator),
        schemaHooks.resolveData(v1DataStocksDataResolver)
      ],
      patch: [
        schemaHooks.validateData(v1DataStocksPatchValidator),
        schemaHooks.resolveData(v1DataStocksPatchResolver)
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
declare module '../../../../declarations' {
  interface ServiceTypes {
    'v1/data/stocks': V1DataStocksService
  }
}
