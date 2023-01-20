import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../../declarations';
export declare const v1StocksSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type V1Stocks = Static<typeof v1StocksSchema>;
export declare const v1StocksResolver: import("@feathersjs/schema").Resolver<{
    symbol?: string | undefined;
    timestamp?: number | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1StocksExternalResolver: import("@feathersjs/schema").Resolver<{
    symbol?: string | undefined;
    timestamp?: number | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1StocksDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>, ["stocks", "timestamp"]>;
export type V1StocksData = Static<typeof v1StocksDataSchema>;
export declare const v1StocksDataValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const v1StocksDataResolver: import("@feathersjs/schema").Resolver<{
    symbol?: string | undefined;
    timestamp?: number | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1StocksPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>, ["stocks", "timestamp"]>>;
export type V1StocksPatch = Static<typeof v1StocksPatchSchema>;
export declare const v1StocksPatchValidator: import("@feathersjs/schema").DataValidatorMap;
export declare const v1StocksPatchResolver: import("@feathersjs/schema").Resolver<{
    symbol?: string | undefined;
    timestamp?: number | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | undefined;
    id: number;
}, HookContext<any>>;
export declare const v1StocksQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>;
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>, ["id", "symbol", "stocks", "timestamp"]>;
export declare const v1StocksQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TInteger>;
    }>;
    $select: import("@sinclair/typebox").TUnsafe<("symbol" | "id" | "timestamp" | "stocks")[]>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
    }>>>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TNumber;
            $gte: import("@sinclair/typebox").TNumber;
            $lt: import("@sinclair/typebox").TNumber;
            $lte: import("@sinclair/typebox").TNumber;
            $ne: import("@sinclair/typebox").TNumber;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
        stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
            $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>;
            $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
            $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                meta: import("@sinclair/typebox").TObject<{
                    symbol: import("@sinclair/typebox").TString<string>;
                    interval: import("@sinclair/typebox").TString<string>;
                    currency_base: import("@sinclair/typebox").TString<string>;
                    currency_quote: import("@sinclair/typebox").TString<string>;
                    type: import("@sinclair/typebox").TString<string>;
                }>;
                values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    datetime: import("@sinclair/typebox").TString<string>;
                    open: import("@sinclair/typebox").TString<string>;
                    high: import("@sinclair/typebox").TString<string>;
                    low: import("@sinclair/typebox").TString<string>;
                    close: import("@sinclair/typebox").TString<string>;
                    volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
                }>>;
                status: import("@sinclair/typebox").TString<string>;
            }>>>;
        } & {
            [key: string]: import("@sinclair/typebox").TSchema;
        }>>]>>;
    }>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    symbol: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TNumber;
        $gte: import("@sinclair/typebox").TNumber;
        $lt: import("@sinclair/typebox").TNumber;
        $lte: import("@sinclair/typebox").TNumber;
        $ne: import("@sinclair/typebox").TNumber;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
    timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
    stocks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        meta: import("@sinclair/typebox").TObject<{
            symbol: import("@sinclair/typebox").TString<string>;
            interval: import("@sinclair/typebox").TString<string>;
            currency_base: import("@sinclair/typebox").TString<string>;
            currency_quote: import("@sinclair/typebox").TString<string>;
            type: import("@sinclair/typebox").TString<string>;
        }>;
        values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            datetime: import("@sinclair/typebox").TString<string>;
            open: import("@sinclair/typebox").TString<string>;
            high: import("@sinclair/typebox").TString<string>;
            low: import("@sinclair/typebox").TString<string>;
            close: import("@sinclair/typebox").TString<string>;
            volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        status: import("@sinclair/typebox").TString<string>;
    }>>, import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
        $gt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $gte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $lt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $lte: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $ne: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>;
        $in: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>>;
        $nin: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            meta: import("@sinclair/typebox").TObject<{
                symbol: import("@sinclair/typebox").TString<string>;
                interval: import("@sinclair/typebox").TString<string>;
                currency_base: import("@sinclair/typebox").TString<string>;
                currency_quote: import("@sinclair/typebox").TString<string>;
                type: import("@sinclair/typebox").TString<string>;
            }>;
            values: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                datetime: import("@sinclair/typebox").TString<string>;
                open: import("@sinclair/typebox").TString<string>;
                high: import("@sinclair/typebox").TString<string>;
                low: import("@sinclair/typebox").TString<string>;
                close: import("@sinclair/typebox").TString<string>;
                volume: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
            }>>;
            status: import("@sinclair/typebox").TString<string>;
        }>>>;
    } & {
        [key: string]: import("@sinclair/typebox").TSchema;
    }>>]>>;
}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type V1StocksQuery = Static<typeof v1StocksQuerySchema>;
export declare const v1StocksQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const v1StocksQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {
        symbol?: number | undefined;
        id?: number | undefined;
        timestamp?: number | undefined;
        stocks?: number | undefined;
    };
    $select: ("symbol" | "id" | "timestamp" | "stocks")[];
    $or: {
        symbol?: string | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        id?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        timestamp?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        stocks?: {
            values: {
                volume?: string | undefined;
                high: string;
                low: string;
                open: string;
                close: string;
                datetime: string;
            }[];
            meta: {
                symbol: string;
                type: string;
                interval: string;
                currency_base: string;
                currency_quote: string;
            };
            status: string;
        } | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
    }[];
    $and: {
        symbol?: string | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        id?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        timestamp?: number | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
        stocks?: {
            values: {
                volume?: string | undefined;
                high: string;
                low: string;
                open: string;
                close: string;
                datetime: string;
            }[];
            meta: {
                symbol: string;
                type: string;
                interval: string;
                currency_base: string;
                currency_quote: string;
            };
            status: string;
        } | Partial<{
            [x: string]: unknown;
            [x: number]: unknown;
        }> | undefined;
    }[];
}> & {
    symbol?: string | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
    id?: number | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
    timestamp?: number | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
    stocks?: {
        values: {
            volume?: string | undefined;
            high: string;
            low: string;
            open: string;
            close: string;
            datetime: string;
        }[];
        meta: {
            symbol: string;
            type: string;
            interval: string;
            currency_base: string;
            currency_quote: string;
        };
        status: string;
    } | Partial<{
        [x: string]: unknown;
        [x: number]: unknown;
    }> | undefined;
} & {}, HookContext<any>>;
