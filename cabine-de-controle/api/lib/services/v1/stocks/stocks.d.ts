import type { Application } from '../../../declarations';
import { V1StocksService } from './stocks.class';
export * from './stocks.class';
export * from './stocks.schema';
export declare const v1Stocks: (app: Application) => void;
declare module '../../../declarations' {
    interface ServiceTypes {
        'v1/stocks': V1StocksService;
    }
}
