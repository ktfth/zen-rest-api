// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#custom-services
import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers'

import type { Application } from '../../../declarations'
import type { V1Stocks, V1StocksData, V1StocksPatch, V1StocksQuery } from './stocks.schema'

export interface V1StocksServiceOptions {
  app: Application
}

export interface V1StocksParams extends Params<V1StocksQuery> {}

// This is a skeleton for a custom service class. Remove or add the methods you need here
export class V1StocksService
  implements ServiceInterface<V1Stocks, V1StocksData, V1StocksParams, V1StocksPatch>
{
  constructor(public options: V1StocksServiceOptions) {}

  async find(_params?: V1StocksParams): Promise<V1Stocks[]> {
    return []
  }

  async get(id: Id, _params?: V1StocksParams): Promise<V1Stocks> {
    return {
      id: 0,
    }
  }

  async create(data: V1StocksData, params?: V1StocksParams): Promise<V1Stocks> {
    const service = this.options.app.service('v1/data/stocks')
    const request = await service.create({
      stocks: data.stocks,
    })
    const stocks = request

    return {
      id: stocks.id,
      ...data,
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id: NullableId, data: V1StocksData, _params?: V1StocksParams): Promise<V1Stocks> {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id: NullableId, data: V1StocksPatch, _params?: V1StocksParams): Promise<V1Stocks> {
    return {
      id: 0,
      ...data
    }
  }

  async remove(id: NullableId, _params?: V1StocksParams): Promise<V1Stocks> {
    return {
      id: 0,
    }
  }
}

export const getOptions = (app: Application) => {
  return { app }
}
