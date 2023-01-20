import type { Application } from '../../../../declarations';
import { V1DataStocksService } from './stocks.class';
export * from './stocks.class';
export * from './stocks.schema';
export declare const v1DataStocks: (app: Application) => void;
declare module '../../../../declarations' {
    interface ServiceTypes {
        'v1/data/stocks': V1DataStocksService;
    }
}
