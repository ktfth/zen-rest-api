import type { Params } from '@feathersjs/feathers';
import { KnexService } from '@feathersjs/knex';
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex';
import type { Application } from '../../../../declarations';
import type { V1DataStocks, V1DataStocksData, V1DataStocksPatch, V1DataStocksQuery } from './stocks.schema';
export interface V1DataStocksParams extends KnexAdapterParams<V1DataStocksQuery> {
}
export declare class V1DataStocksService<ServiceParams extends Params = V1DataStocksParams> extends KnexService<V1DataStocks, V1DataStocksData, ServiceParams, V1DataStocksPatch> {
}
export declare const getOptions: (app: Application) => KnexAdapterOptions;
