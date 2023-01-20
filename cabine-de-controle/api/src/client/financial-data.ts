import { GET, BaseService, Response, QueryMap } from 'ts-retrofit'

interface Stock {
  meta: object;
  values: object[];
  status: string;
}

interface Stocks {
  [key: string]: Stock;
}

interface TimeSeriesQuery {
  symbol: string;
  interval: string;
  apikey: string;
}

export class StocksService extends BaseService {
  @GET('time_series')
  async getTimeSeries(@QueryMap query: TimeSeriesQuery): Promise<Response<Stocks>> {
    return <Response<Stocks>> {}
  }
}