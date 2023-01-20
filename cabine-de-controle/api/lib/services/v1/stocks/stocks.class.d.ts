import type { Id, NullableId, Params, ServiceInterface } from '@feathersjs/feathers';
import type { Application } from '../../../declarations';
import type { V1Stocks, V1StocksData, V1StocksPatch, V1StocksQuery } from './stocks.schema';
export interface V1StocksServiceOptions {
    app: Application;
}
export interface V1StocksParams extends Params<V1StocksQuery> {
}
export declare class V1StocksService implements ServiceInterface<V1Stocks, V1StocksData, V1StocksParams, V1StocksPatch> {
    options: V1StocksServiceOptions;
    constructor(options: V1StocksServiceOptions);
    find(_params?: V1StocksParams): Promise<V1Stocks[]>;
    get(id: Id, _params?: V1StocksParams): Promise<V1Stocks>;
    create(data: V1StocksData, params?: V1StocksParams): Promise<V1Stocks>;
    update(id: NullableId, data: V1StocksData, _params?: V1StocksParams): Promise<V1Stocks>;
    patch(id: NullableId, data: V1StocksPatch, _params?: V1StocksParams): Promise<V1Stocks>;
    remove(id: NullableId, _params?: V1StocksParams): Promise<V1Stocks>;
}
export declare const getOptions: (app: Application) => {
    app: Application;
};
