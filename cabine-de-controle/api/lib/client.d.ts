import type { TransportConnection, Params } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import type { V1DataStocks, V1DataStocksData, V1DataStocksQuery, V1DataStocksService } from './services/v1/data/stocks/stocks';
export type { V1DataStocks, V1DataStocksData, V1DataStocksQuery };
export declare const v1DataStocksServiceMethods: readonly ["find", "get", "create", "patch", "remove"];
export type V1DataStocksClientService = Pick<V1DataStocksService<Params<V1DataStocksQuery>>, (typeof v1DataStocksServiceMethods)[number]>;
import type { V1Stocks, V1StocksData, V1StocksQuery, V1StocksService } from './services/v1/stocks/stocks';
export type { V1Stocks, V1StocksData, V1StocksQuery };
export declare const v1StocksServiceMethods: readonly ["find", "get", "create", "patch", "remove"];
export type V1StocksClientService = Pick<V1StocksService, (typeof v1StocksServiceMethods)[number]>;
import type { User, UserData, UserQuery, UserService } from './services/users/users';
export type { User, UserData, UserQuery };
export declare const userServiceMethods: readonly ["find", "get", "create", "patch", "remove"];
export type UserClientService = Pick<UserService<Params<UserQuery>>, (typeof userServiceMethods)[number]>;
export interface ServiceTypes {
    'v1/data/stocks': V1DataStocksClientService;
    'v1/stocks': V1StocksClientService;
    users: UserClientService;
}
/**
 * Returns a typed client for the api app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
