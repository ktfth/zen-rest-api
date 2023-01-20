// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { StocksService } from '../client/financial-data'
import { ServiceBuilder } from 'ts-retrofit'

export const stocks = async (context: HookContext) => {
  const financialData = context.app.get('financialData')
  
  const stocksService = new ServiceBuilder()
    .setEndpoint(financialData.url)
    .build(StocksService)

  const response = await stocksService.getTimeSeries({
    symbol: context.params.query.symbol,
    interval: '1min',
    apikey: financialData.apiKey,
  })

  context.data.stocks = response.data

  console.log(`Running hook stocks on ${context.path}.${context.method}`)
}
