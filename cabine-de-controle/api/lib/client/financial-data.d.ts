import { BaseService, Response } from 'ts-retrofit';
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
export declare class StocksService extends BaseService {
    getTimeSeries(query: TimeSeriesQuery): Promise<Response<Stocks>>;
}
export {};
