// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'
import { StocksService } from '../client/time-series'
import { ServiceBuilder } from 'ts-retrofit'

export const stocks = async (context: HookContext) => {
  const stocksService = new ServiceBuilder()
    .setEndpoint('https://api.twelvedata.com/')
    .build(StocksService)

  const response = await stocksService.getTimeSeries({
    symbol: context.data.symbol,
    interval: '1min',
    apikey: '1612b3cffc064f9f991dd7eb49980847'
  })

  context.data.stocks = response.data

  console.log(`Running hook stocks on ${context.path}.${context.method}`)
}
