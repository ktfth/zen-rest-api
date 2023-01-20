import { v1DataStocks } from './v1/data/stocks/stocks'
import { v1Stocks } from './v1/stocks/stocks'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(v1DataStocks)
  app.configure(v1Stocks)
  app.configure(user)
  // All services will be registered here
}
