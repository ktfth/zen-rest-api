// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../../../declarations'
import type { V1DataStocks, V1DataStocksData, V1DataStocksPatch, V1DataStocksQuery } from './stocks.schema'

export interface V1DataStocksParams extends KnexAdapterParams<V1DataStocksQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class V1DataStocksService<ServiceParams extends Params = V1DataStocksParams> extends KnexService<
  V1DataStocks,
  V1DataStocksData,
  ServiceParams,
  V1DataStocksPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'stocks'
  }
}
